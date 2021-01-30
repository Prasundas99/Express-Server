import mongoose from 'mongoose';
import records from './records.js';
const vacine = mongoose.Schema({

    //Level 3
    vaccination_records : {
        records : [records] //Sub ++
    },

});


const vacines = mongoose.model("vacine", vacine);

export default vacines;