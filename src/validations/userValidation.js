// schemas.js

import Joi from 'joi';


const userValidation = {

  userRegister: Joi.object().keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().required().min(6),
    fullName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
  }),

  userLogin: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required().min(6),
  }),

  resendOtpToEmail: Joi.object().keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  }),

  userEmailVerify: Joi.object().keys({
    otp: Joi.number().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  }),

  updatePassword: Joi.object().keys({
    oldPassword: Joi.string().required().min(6),
    newPassword: Joi.string().required().min(6),
  }),

  requestRestPasswordOtp: Joi.object().keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  }),

  resetPassword: Joi.object().keys({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    otp: Joi.number().required(),
    newPassword: Joi.string().min(6).required(),
    repeatPassword: Joi.ref('newPassword'),
  }),


  validMongoId: Joi.string().trim().length(24),
};
export default userValidation;
