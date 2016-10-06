import * as mongoose from 'mongoose';

export interface IComment extends mongoose.Document {
    name:string,
    title: string,
    votes: number,
    timeCreate: Date,
    message: string,
}

let commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    votes: {
        type: Number,
        required: false,
    },
    timeCreate: {
        type: Date,
        required: true
    },
    message :{
        type: String,
        required: true
    }
});

export default mongoose.model<IComment>('Comment', commentSchema);
