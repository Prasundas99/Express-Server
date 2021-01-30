import mongoose from 'mongoose';

const assets = mongoose.Schema({

    //Level 3
    assets : {
        commodities : String,
        cryptocurrencies : String,
        stocks :String,
        mutual_funds : String,
        ipos : String
      },

});


const assetss = mongoose.model("assets", assets);

export default assetss;