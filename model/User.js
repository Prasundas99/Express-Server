import mongoose from 'mongoose';
import User_Detail from './User_Details.js';
import User_Document from './User_Document.js';
import User_Edu from './User_Education.js';
import User_Careers from './User_Career.js';
import User_finances from './User_finance.js';
import User_Medicals from './User_Medical.js'

const Users = mongoose.Schema({
    
    //Level 1
    User : {
        User_Details : [User_Detail],
        User_Documents : [User_Document],
        User_Education : [User_Edu],
        User_Career : [User_Careers],
        User_Finance : [User_finances],
        User_Medical : [User_Medicals],
        Key : String
    },  

});



const User = mongoose.model("Postmodel", Users);

export default User;