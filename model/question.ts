import * as mongoose from 'mongoose';
import * as Comment from './comment';

export interface IQuestion extends mongoose.Document {
    title: string,
    name: string,
    question: string,
    timeCreate: Date,
    votes: number,
    comments: Comment.IComment[];

}

let questionScheme = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: false,
    },
    question: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        required: false,
    },
    timeCreate: {
        type: Date,
        required: false,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

export default mongoose.model<IQuestion>('Question', questionScheme);
