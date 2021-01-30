import mongoose from 'mongoose';


const other_certificates = mongoose.Schema({

        //Level 4
        other_certificates : {
            Academy : String,
            Sports : Array ,
            Events : Array 
        },

});



const other_certificate = mongoose.model("other_certificates", other_certificates);

export default other_certificate;