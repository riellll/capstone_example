import mongoose from "mongoose";

const { Schema } = mongoose;

const MedRecordSchema = new Schema(
  {
    diagnosis: {
      type: [String],
      required: true,
      default: [],
    },
    data: {
      type: Map,
      of: String,
    },

    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    employee_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    medicine_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventory",
    },
  },
  { timestamps: true }
);

const MedRecords =
  mongoose.models.MedRecords || mongoose.model("MedRecords", MedRecordSchema);

export default MedRecords;
