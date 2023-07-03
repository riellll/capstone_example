import mongoose, { Schema } from "mongoose";

const RegUserSchema = new Schema(
  {
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Students",
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    user_type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const RegUser = mongoose.models.RegUser || mongoose.model("RegUser", RegUserSchema);

export default RegUser;
