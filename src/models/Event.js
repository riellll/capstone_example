import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema (
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
        },
        author: {
            type: String,
            required: true,
        },
        username: {
            
        }
    }
);

export default mongoose.model('Event', eventSchema); 