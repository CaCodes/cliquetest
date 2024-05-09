
import Course from '../models/Course';
import ErrorHandler from '../helpers/errHandler';

const { serverResponse } = ErrorHandler;
export default class CourseClass {
  //-----------------------------------------------------------------
  // ----------------COURSE SECTION FOR COURSE MANAGEMENT---------------
  //-----------------------------------------------------------------

  /**
     * ADD NEW COURSE
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

  /**
     * USER VIEW SINGLE COURSE
     * @param {{}} course
  */
  async getCourse(course) {
    const thecourse = await Course.findById({ _id: course.id });
    return {
      status: 'success',
      data: thecourse,
      code: 200,
    };
  }
}
