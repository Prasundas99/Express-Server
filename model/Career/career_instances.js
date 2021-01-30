import mongoose from 'mongoose';
import finance from './finance.js'


const career_instances = mongoose.Schema({

    //Level 3
    career_instances :{
        company_name : String,
        company_post : String,
        finance : [finance] //Sub Parent
    },

});



const career_instance = mongoose.model("career_instances", career_instances);

export default career_instance;