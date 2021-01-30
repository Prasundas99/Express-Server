import mongoose from 'mongoose';
const User_Details = mongoose.Schema({

    User_Details: {
        name: String,
        address: String,
        phn_no: Int16Array,
        email: String,
        key :  Int32Array,
        dob :  Date
    },

  

});



const User_Detail = mongoose.model("User_Details", User_Details);

export default User_Detail;