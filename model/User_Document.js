import mongoose from 'mongoose';
const User_Documents = mongoose.Schema({

    //Level 2
    User_Documents: {
        adhaar_card_no :  Int32Array,
        driver_license : String,
        pan_card :  String,
        voter_card : String,
        passport : String
    },

});



const User_Document = mongoose.model("User_Documents", User_Documents);

export default User_Document;