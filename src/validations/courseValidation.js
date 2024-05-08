// schemas.js

import Joi from 'joi';

const userValidation = {

  createCourseValidation: Joi.object().keys({
    title: Joi.string().required(),
    tutor: Joi.string().required(),
    duration: Joi.string().required(),
    description: Joi.string().required(),
  }),

  validMongoId: Joi.string().trim().length(24),
};
export default userValidation;
