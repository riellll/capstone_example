import mongoose from "mongoose";

const { Schema } = mongoose;

const EmployeeSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
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
    job_role: {
      type: String,
      required: true,
    },
    college_id: {
        type: Number,
        required: true,
      },
  },
  { timestamps: true }
);

const Employee = mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema);

export default Employee;
