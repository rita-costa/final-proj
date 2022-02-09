import mongoose from 'mongoose';

// Gives uniformity to documents/saved data 
const recordingSchema = mongoose.Schema(
    {
        title: { 
            type: String,
            required: false,
        },
        rawText: {
            type: String,
            required: true,
        },
        speaker1: {
            type: [String],
            required: false,
        },
        speaker2: {
            type: [String],
            required: false,
        },
        highlights: {
            type: [{location: (Number, Number) , comment: String}],
            required: false,
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
    }
);

// Turn schema into model
const Recording = mongoose.model('Recording', recordingSchema);

export default Recording;