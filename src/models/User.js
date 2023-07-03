import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);


const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;