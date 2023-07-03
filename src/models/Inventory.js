import mongoose from "mongoose";

const { Schema } = mongoose;

const InventorySchema = new Schema(
  {
    medicine_name: {
      type: String,
      required: true,
    },
    data: {
      type: Map,
      of: String,
    },
    In_Out: {
      type: String,
      required: true,
    },
    expiration_date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Inventory =
  mongoose.models.Inventory || mongoose.model("Inventory", InventorySchema);

export default Inventory;
