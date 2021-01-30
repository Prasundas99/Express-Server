import mongoose from 'mongoose';
import other_certificate from './Other_Certificate.js';


const Colleges = mongoose.Schema({

        //Level 3
        College : {
            degree : String,
            course :String,
            discipline : String,
            semester_sheets : String,
            final_year_projects : String,
            degree_certificate : String,
            other_certificates : [other_certificate]
        },

});



const College = mongoose.model("Colleges", Colleges);

export default College;