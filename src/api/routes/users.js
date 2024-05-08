import { Router } from 'express';
import userController from '../../controllers/user';
import userValidation from '../../validations/userValidation';
import accountAuth from '../middleware/accountAuth';
import asyncHandler from '../middleware/asyncHandler_middleware';
import joiMiddleware from '../middleware/joi_middleware';
const { userAuth, adminAuth } = accountAuth;
const route = Router();
export default (app) => {
  app.use('/user', route);

  route.post(
    '/signup',
    joiMiddleware(userValidation.userRegister),
    asyncHandler(userController.userRegister),
  );

  route.post(
    '/resend-otp',
    joiMiddleware(userValidation.resendOtpToEmail),
    asyncHandler(userController.resendEmailOtp),
  );

  route.post(
    '/verify-email',
    joiMiddleware(userValidation.userEmailVerify),
    asyncHandler(userController.verifyEmail),
  );


  route.post(
    '/login',
    joiMiddleware(userValidation.userLogin),
    asyncHandler(userController.userLogin),
  );

  route.get(
    '/my-profile', userAuth,
    asyncHandler(userController.myProfile),
  );
};
