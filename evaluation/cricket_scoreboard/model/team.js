const mongoose=require("mongoose");

const teamSchema=mongoose.Schema({
    team:String,
    score:String,
    batsman:String,
    over:String,
    bowler:String,
    wicket:String
});

const teamModel=mongoose.model("team",teamSchema);

module.exports={
    teamModel
}