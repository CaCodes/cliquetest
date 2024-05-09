import mongoose from 'mongoose';

const { Schema } = mongoose;

const courseSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
    },
    tutor: {
      type: String,
    },
    tutorDetails: {
      type: String,
    },
    duration: {
      type: String,
    },
    description: {
      type: String,
    },
    students: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);


const Course = mongoose.model('Course', courseSchema);
export default Course;
