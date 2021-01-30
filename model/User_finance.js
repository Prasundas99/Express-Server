import mongoose from 'mongoose';
import assetss from './Finance/assets.js';

const User_finance = mongoose.Schema({

    //Level 2
    User_finance : {
        itr_forms : String,
        bank_transaction : String,
        assets : [assetss], //Sub Parent
        pan_card : String
    },

});


const User_finances = mongoose.model("User_finance", User_finance);

export default User_finances;