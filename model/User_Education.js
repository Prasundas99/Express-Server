import mongoose from 'mongoose';
import School_board from './Education.js';
import College from './Education/College,js';



const Education = mongoose.Schema({
   
    //Level 2
    User_Education: {
        School_boards : [School_board],
        College : [College] 
    },

});



const User_Edu = mongoose.model("User_Education", Education);

export default User_Edu;