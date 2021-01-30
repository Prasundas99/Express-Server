import mongoose from 'mongoose';


const School_boards = mongoose.Schema({

    //Level 3
    School_board : {
        marks : String,
        grade : String,
        admit_card : String,
        registration_card : String,
        pass_certificate : String
    },

});



const School_board = mongoose.model("School_boards", School_boards);

export default School_board;