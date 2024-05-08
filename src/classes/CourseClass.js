
import Course from '../models/Course';
// import emailService from '../services/emailService';
// import emailTemplate from '../helpers/emailTemplate';
import ErrorHandler from '../helpers/errHandler';

const { serverResponse } = ErrorHandler;
// const { emailServiceAuto } = emailService;

export default class CourseClass {
  //-----------------------------------------------------------------
  // ----------------COURSE SECTION FOR COURSE MANAGEMENT---------------
  //-----------------------------------------------------------------

  /**
     * ADD COURSE
     * @param {{}} data
  */
  async createNewCourse(data) {
    const newCourse = await new Course(data).save();
    return {
      status: 'success',
      data: newCourse,
      code: 201,
    };
  }

  /**
     * USER GET ALL COURSES
  */
  async userGetAllCourses() {
    const courses = await Course.find({});
    return {
      status: 'success',
      data: courses,
      code: 200,
    };
  }
}
