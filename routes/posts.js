"use strict"
//const models=require('../models');
const express= require('express');
const router = express.Router();

//models.sequelize.sync();

//route for adding airports
router.post("/accounts/add", function(req, res){
	let data=req.body;
	console.log(data);

});
module.exports = router;