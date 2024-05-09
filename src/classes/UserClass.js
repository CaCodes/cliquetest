
import jwt from 'jsonwebtoken';
import User from '../models/User';
import emailService from '../services/emailService';
import emailTemplate from '../helpers/emailTemplate';
import ErrorHandler from '../helpers/errHandler';
import accountAuth from '../api/middleware/accountAuth';
const { userAuth } = accountAuth;

const { serverResponse } = ErrorHandler;
const { emailServiceAuto } = emailService;

export default class UserClass {
  //-----------------------------------------------------------------
  // ----------------USERS SECTION FOR USER MANAGEMENT---------------
  //-----------------------------------------------------------------

  /**
     * USER REGISTRATION
     * @param {{}} data
     * @param {String} req
  */
  async userRegister(userData, req) {
    const ipAddress = (req.headers['x-forwarded-for'] || '').split(',').pop().trim()
        || req.connection.remoteAddress
        || req.socket.remoteAddress
        || req.connection.socket.remoteAddress;

    const existEmail = await User.findOne({ email: userData.email }).lean();
    if (existEmail) { return { status: 'error', message: `${userData.email} Already Exist`, code: 409 }; }

    const existPhone = await User.findOne({ email: userData.phoneNumber }).lean();
    if (existPhone) { return { status: 'error', message: `${userData.phoneNumber} Already Exist`, code: 409 }; }

    // const userCount = await User.countDocuments().lean();
    // const generateOTP = Function.generateEmailOtp();

    // userData.tentUserId = Function.generateTentId(userCount, userData.fullName);
    // userData.verifyEmailOtp = generateOTP.otp;
    // userData.verifyEmailOtpExpires = generateOTP.expires;
    userData.creator = 'user';
    userData.ipAddress = ipAddress;

    const user = await new User(userData).save();
    const token = await user.generateToken();

    // await emailServiceAuto(
    //   userData.email,
    //   'Email Verification',
    //   emailTemplate.confirmationCode(user.verifyEmailOtp, user.fullName),
    // );

    return {
      status: 'success',
      data: { token, user },
      code: 201,
    };
  }


  /**
     * RESEND EMAIL OTP
     * @param {String} email
  */
  async resendEmailOtp(email) {
    const user = await User.findOne({ email });
    if (!user) { return { status: 'error', message: 'User with this email not found', code: 404 }; }

    if (user.emailVerified === true) { return { status: 'error', message: 'Your email has already been verified', code: 400 }; }

    const generateOTP = Function.generateEmailOtp();
    user.verifyEmailOtp = generateOTP.otp;
    user.verifyEmailOtpExpires = generateOTP.expires;
    await user.save();

    await emailServiceAuto(
      user.email,
      'Resend Email Verification',
      emailTemplate.confirmationCode(user.verifyEmailOtp, user.fullName),
    );

    return {
      status: 'success',
      data: `OTP has been re-sent to ${user.email} to verify your email`,
      code: 200,
    };
  }


  /**
     * USER VERIFY EMAIL
     * @param {{}} data
  */
  async verifyEmail(data) {
    const { email, otp } = data;

    const user = await User.findOne({ email, verifyEmailOtp: otp, verifyEmailOtpExpires: { $gt: Date.now() } });
    if (!user) { return { status: 'error', message: 'Invalid OTP or Expired', code: 401 }; }

    user.emailVerified = true;
    user.verifyEmailOtp = null;
    user.verifyEmailOtpExpires = null;

    await user.save();

    const token = await user.generateToken();
    return {
      status: 'success',
      data: { token, user },
      code: 200,
    };
  }


  /**
     * USER LOGIN
     * @param {{}} data
  */
  async userLogin(data) {
    const { email, password } = data;

    const user = await User.findOne({ email });
    if (!user) { return { status: 'error', message: 'User does not exist', code: 400 }; }

    // if (user.emailVerified === false) { return { status: 'error', message: 'Email not verified, kindly verify your email', code: 409 }; }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) { return { status: 'error', message: 'Wrong email or password', code: 400 }; }

    const token = await user.generateToken();

    return {
      status: 'success',
      data: { token, user },
      code: 200,
    };
  }


  /**
     * USER VIEW MY PROFILE
     * @param {{}} user
  */
  async myProfile(user) {
    const myProfile = await User.findById({ _id: user.id });
    return {
      status: 'success',
      data: myProfile,
      code: 200,
    };
  }


  /**
     * USER CHANGE PASSWORD
     * @param {{}} data
     * @param {{}} user
  */
  async changePassword(user, data) {
    const { newPassword, oldPassword } = data;

    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) { return { status: 'error', message: 'Wrong Old Password', code: 401 }; }

    user.password = newPassword;
    user.tokens = [];
    await user.save();

    return {
      status: 'success',
      data: 'Password Updated Successfully, Kindly Login Again',
      code: 200,
    };
  }


  /**
     * USER LOGOUT CURRENT DEVICE
     * @param {{}} user
     * @param {String} currentToken
  */
  async logout(user, currentToken) {
    user.tokens = user.tokens.filter(token => token.token !== currentToken);
    await user.save();

    return {
      status: 'success',
      data: 'Logged out Successfully',
      code: 200,
    };
  }


  /**
     * USER LOGOUT ALL DEVICE
     * @param {{}} user
  */
  async logoutAll(user) {
    user.tokens = [];
    await user.save();

    return {
      status: 'success',
      data: 'Logged out from all devices Successfully',
      code: 200,
    };
  }


  /**
     * USER REQUEST PASSWORD RESET
     * @param {{}} data
  */
  async requestPassReset(data) {
    const { email } = data;

    const user = await User.findOne({ email});
    if (!user) { return { status: 'error', message: `The email address  ${email} is not associated with any account. Double-check your email address and try again.`, code: 404 }; }

    if (user.emailVerified === false) { return { status: 'error', message: 'Your email is not yet verified , kindly verify your email', code: 401 }; }

    await user.generatePasswordReset();

    await emailServiceAuto(
      user.email,
      'Rest Password Request',
      emailTemplate.recoverPassword(user.resetPasswordOtp, user.fullName),
    );
    return {
      status: 'success',
      data: `OTP has been sent to ${email} and ${user.phoneNumber} to reset your password`,
      code: 200,
    };
  }


  /**
     * USER RESET PASSWORD
     * @param {{}} data
  */
  async resetPassword(data) {
    const { newPassword, otp, email } = data;

    const user = await User.findOne({email, resetPasswordOtp: otp, resetPasswordExpires: { $gt: Date.now() } });
    if (!user) { return { status: 'error', message: 'Invalid OTP or Expired', code: 401 }; }

    user.password = newPassword;
    user.tokens = [];
    user.resetPasswordOtp = null;
    user.resetPasswordExpires = null;
    await user.save();

    await emailServiceAuto(
      user.email,
      'Password Reset',
      emailTemplate.restPassword(user.fullName),
    );

    return {
      status: 'success',
      data: 'Password Reset Successfully, Kindly Login Again',
      code: 200,
    };
  }
}
