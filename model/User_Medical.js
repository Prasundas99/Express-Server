import mongoose from 'mongoose';
import vacines from './Medical/vacination_record.js';

const User_Medical = mongoose.Schema({

    //Level 2
    User_Medical :{
        vaccination_records : [vacines], //Sub parent
        medical_illness_long_term : String
    },

});


const User_Medicals = mongoose.model("User_Medical", User_Medical);

export default User_Medicals;