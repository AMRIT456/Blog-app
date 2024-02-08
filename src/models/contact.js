import mongoose from "mongoose";

const contactSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },

},{
    timestamps:true,
})

const Tech=mongoose.models.Tech || mongoose.model('Tech',contactSchema);
export default Tech;