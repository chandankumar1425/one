const express=require("express");
const {teamModel}=require("../model/team")
const route=express.Router();

route.post("/admin/post",async(req,res)=>{
    try {
       let data=req.body;
       let teamdata=new teamModel(data);
       await teamdata.save();
       res.send({"msg":"your scoreboard has beeen updated"})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong",error})
    }
});

route.get("/get",async(req,res)=>{
    try {
        let data= await teamModel.find();
        res.send(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong",error})
    }
});
module.exports={
    route
}