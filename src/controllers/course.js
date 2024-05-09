import CourseClass from '../classes/CourseClass';
import LoggerInstance from '../loaders/logger';
import ErrorHandler from '../helpers/errHandler';
import SuccessHandler from '../helpers/sucessHandler';
// import userValidation from '../validations/userValidation';

const { successWithMessage, successWithData, successWithMessageAndData } =
  SuccessHandler;
const { serverResponse, validationError } = ErrorHandler;

const courseController = {

  //-----------------------------------------------------------------
  // ----------------COURSE SECTION FOR COURSE MANAGEMENT---------------
  //-----------------------------------------------------------------


  // CREATE COURSE
  // @route       POST api/v1/course/create
  // @desc        Course Create
  // @access      Public(Course)
  createCourse: async (req, res) => {
    const response = await new CourseClass().createNewCourse(req.body);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('Course Created Successfully');
    return successWithData(res, 200, data);
  },

  // USER VIEW COURSE
  // @route       GET api/v1/course/all-course
  // @desc        User View All Course
  // @access      Private(User)
  AllCourse: async (req, res) => {
    const response = await new CourseClass().userGetAllCourses();
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('Fetch All Courses Successfully');
    return successWithData(res, 200, data);
  },

  // USER VIEW ONE COURSE
  // @route       GET api/v1/course/course-details/id
  // @desc        User View Single Course Details
  // @access      Private(User)
  fetchCourseDetails: async (req, res) => {
    const response = await new CourseClass().getCourse(req.params);
    const { status, message, data, code } = response;
    if (status === 'error') return serverResponse(res, message, code);
    LoggerInstance.info('Fetch Course Details Successfully');
    return successWithData(res, 200, data);
  },

};
export default courseController;
