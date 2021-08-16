import mongoose from 'mongoose';

const {Schema} = mongoose;
const roomSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    max : {
        type : Number,
        required : true,
        default : 10,
        min : 2
    },
    owner : {
        type : String,
        required : ture,
    },
    password : String,
    createdAt : {
        type : Date,
        default : Date.now,
    },
});

export default mongoose.model('Room', roomSchema);