import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String, // Storing as String for simple "YYYY-MM-DD" or Date object
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'General'
    },
    image: {
        type: String, // URL to image
        default: ''
    }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);

export default Event;
