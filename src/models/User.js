import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/index';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      lowercase: true,
      maxlength: 100,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^([\w-/.]+@([\w-]+\.)+[\w-]{2,4})?$/, "User's email is invalid"],
    },
    phoneNumber: {
      type: String,
    },
    password: {
      type: String,
      minlength: 6,
      validate(value) {
        if (value.includes('password')) {
          throw new Error('Your password must not include "password"');
        }
      },
    },
    ipAddress: {
      type: String,
      default: null,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    verifyEmailOtp: {
      type: Number,
    },
    verifyEmailOtpExpires: {
      type: Date,
    },
    resetPasswordOtp: {
      type: Number,
    },
    resetPasswordExpires: {
      type: Date,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

// HASHING OF PASSWORD //
userSchema.pre('save', function hashPassword(next) {
  try {
    if (this.isModified('password')) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(this.password, salt);
      this.password = hash;
      next();
    } else {
      next();
    }
  } catch (error) {
    return next(error);
  }
});

// COMPARING OF PASSWORD
userSchema.methods.comparePassword = async function comp(plainPassword) {
  try {
    const user = this;
    const isMatch = await bcrypt.compareSync(plainPassword, user.password);
    return isMatch;
  } catch (error) {
    console.log(error);
  }
};

// GENERATING OF TOKEN
userSchema.methods.generateToken = async function genToken() {
  try {
    const user = this;
    const token = jwt.sign({
      _id: user._id.toString(),
    },
    config.secretOrKey);

    user.tokens = user.tokens.concat({
      token,
    });
    await user.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

// GENERATE RESET PASSWORD OTP
userSchema.methods.generatePasswordReset = async function genReset() {
  try {
    const user = this;
    user.resetPasswordOtp = Math.floor(100000 + Math.random() * 900000);
    user.resetPasswordExpires = Date.now() + 3600000; // expires in an hour
    await user.save();
  } catch (error) {
    console.log(error);
  }
};


// GENERATE VERIFY PHONE NUMBER OTP
userSchema.methods.generatePhoneOtp = async function genPhoneOtp() {
  try {
    const user = this;
    user.verifyPhoneNumberOtp = Math.floor(100000 + Math.random() * 900000);
    user.verifyPhoneNumberOtpExpires = Date.now() + 3600000; // expires in an hour
    await user.save();
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.toJSON = function toJson() {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};


const User = mongoose.model('User', userSchema);
export default User;
