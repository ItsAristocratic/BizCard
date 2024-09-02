import mongoose from "mongoose";

const usersSchema = new mongoose.Schema ({
    businessEmail:String,
    businessPassword:String,
    businessName:String,
    businessUsername:String,
    aboutBusiness:String,
    phoneNumber:String,
    address:String,

})
export const SchemaCreated = mongoose.models.users || mongoose.model('users', usersSchema)