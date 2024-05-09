import UserClass from '../classes/UserClass';
import LoggerInstance from '../loaders/logger';
import ErrorHandler from '../helpers/errHandler';
import SuccessHandler from '../helpers/sucessHandler';
// import userValidation from '../validations/userValidation';

const { successWithMessage, successWithData, successWithMessageAndData } =
  SuccessHandler;
const { serverResponse, validationError } = ErrorHandler;

const userController = {

  //-----------------------------------------------------------------
  // ----------------USERS SECTION FOR USER MANAGEMENT---------------
  //-----------------------------------------------------------------

  // REGISTER USER
  // @route       POST api/v1/user/signup
  // @desc        Register New User
  // @access      Public(User)
  userRegister: async (req, res) => {
    const response = await new UserClass().userRegister(req.body, req);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('User Registered Successfully');
    return successWithData(res, 201, data);
  },


  // RESEND EMAIL OTP
  // @route       POST api/v1/user/resend-otp
  // @desc        Resend Otp to User Email
  // @access      Public(User)
  resendEmailOtp: async (req, res) => {
    const response = await new UserClass().resendEmailOtp(req.body.email);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('OTP Resent Successfully');
    return successWithData(res, 200, data);
  },


  // USER VERIFY EMAIL
  // @route       POST api/v1/user/verify-email
  // @desc        User verify their email
  // @access      Public(User)
  verifyEmail: async (req, res) => {
    const response = await new UserClass().verifyEmail(req.body);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('User Email Verified');
    return successWithMessageAndData(res, 200, 'Email Verification Successful', data);
  },


  // USER LOGIN
  // @route       POST api/v1/user/login
  // @desc        User Login
  // @access      Public(User)
  userLogin: async (req, res) => {
    const response = await new UserClass().userLogin(req.body);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('Login Successfully');
    return successWithData(res, 200, data);
  },

  // USER VIEW MY PROFILE
  // @route       GET api/v1/user/my-profile/id
  // @desc        User View his / her profile
  // @access      Private(User)
  myProfile: async (req, res) => {
    const response = await new UserClass().myProfile(req.params);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('Fetch User Profile Successfully');
    return successWithData(res, 200, data);
  },


  // USER LOGOUT ALL DEVICES
  // @route       POST api/v1/user/logout-all
  // @desc        User Log out from all devices
  // @access      Private(User)
  logoutAllDevice: async (req, res) => {
    const response = await new UserClass().logoutAll(req.user);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('Logged Out All Devices Successfully');
    return successWithData(res, 200, data);
  },


  // USER CHANGE PASSWORD
  // @route       PATCH api/v1/user/update-password
  // @desc        User change password from dashboard
  // @access      Private(User)
  changePassword: async (req, res) => {
    const response = await new UserClass().changePassword(req.user, req.body);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('Profile Update Successfully');
    return successWithData(res, 200, data);
  },


  // USER REQUEST PASSWORD RESET
  // @route       POST api/v1/user/request-password-reset
  // @desc        User request to reset password
  // @access      Public(User)
  requestPassReset: async (req, res) => {
    const response = await new UserClass().requestPassReset(req.body);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('Password Reset Request Sent Successfully');
    return successWithData(res, 200, data);
  },


  // USER PASSWORD RESET
  // @route       POST api/v1/user/reset-password
  // @desc        User reset password
  // @access      Public(User)
  resetPassword: async (req, res) => {
    const response = await new UserClass().resetPassword(req.body);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('Password Reset Successfully');
    return successWithData(res, 200, data);
  },

};
export default userController;
