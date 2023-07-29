const express = require("express");
const users=require('./users.json')

const router =express.Router();

//get all product
router.get("/getAllUsers", (_request, response)=>{
    try{
        response.status(200).send({
        responseCode:'00',
        responseMessage:"User fetched successfully",
        data:users
        });
    }catch(error){
        response.status(500).send({
        responseMessage:"error: "+error,
        data:null,
        })

    }

})

module.exports.router= router;