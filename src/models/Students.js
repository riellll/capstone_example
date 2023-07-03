import mongoose, { Schema } from "mongoose";

const StudentSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    college_id: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    course_level: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", StudentSchema);

export default Student;
