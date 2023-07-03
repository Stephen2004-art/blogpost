import {model, Schema} from 'mongoose';

const storySchema = new Schema ({
    topic: {
        type: String,
        required: true
    },
    story1: {
        type: String,
        required: true
    },
    story2: {
        type: String,
        required: true
    },
    story3: {
        type: String,
        required: true
    },
    story4: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    images: [String],
    category: {
        type: String,
        required: true  
    }
});

export default model('storyModel', storySchema);