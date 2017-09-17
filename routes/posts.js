"use strict"
//const models=require('../models');
const express= require('express');
const router = express.Router();
const file =require('fs');
//models.sequelize.sync();

//route for adding airports
router.post("/accounts/add", function(req, res){
	let data=req.body;
	file.readFile('accounts.json','utf8', function(err, res){
		if (err) throw err;
		var content=JSON.parse(data);
		var saveData=JSON.stringify(content);
		file.writeFile('accounts.json', saveData, 'utf8',  function(err, res){
			if (err) throw err;
			res.send(req.body);
		})
	})
	

});
module.exports = router;