import { Router } from 'express';
import courseController from '../../controllers/course';
import courseValidation from '../../validations/courseValidation';
import accountAuth from '../middleware/accountAuth';
import asyncHandler from '../middleware/asyncHandler_middleware';
import joiMiddleware from '../middleware/joi_middleware';
const { userAuth } = accountAuth;
const route = Router();
export default (app) => {
  app.use('/course', route);

  route.post(
    '/create',
    joiMiddleware(courseValidation.createCourseValidation),
    asyncHandler(courseController.createCourse),
  );

  route.get(
    '/all-courses', userAuth,
    asyncHandler(courseController.AllCourse),
  );
};
