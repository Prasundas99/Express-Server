import mongoose from 'mongoose';
import career_instance from './Career/career_instances.js';
import non_services from './Career/non-service.js';


const User_Career = mongoose.Schema({

    //Level 2  
    User_Career:{
        resume : String,
        career_instances : [career_instance], //Sub Parent from career
        non_service_persuits : [non_services] //Sub Parent from career
    },

});



const User_Careers = mongoose.model("User_Career", User_Career);

export default User_Careers;