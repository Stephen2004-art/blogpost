import {model, Schema} from 'mongoose';

const storySchema = new Schema ({
    topic: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    },
    images: [String]
});

export default model('storyModel', storySchema);