const express = require("express");
const { check, validationResult } = require("express-validator");
const prisma = require("../../config/prisma-client");

const router = express.Router();

router.get('/',async(req,res)=>{
    res.send('hello')
})













module.exports=router;