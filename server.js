'use strict'
/* 
	Fallback server for supporting browserHistory
	in your React application. 
*/
//instatiate path and express
const express = require('express')
const path = require('path')
const app = express()
const port=3030

const bodyParser = require('body-parser');
// Routers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const formSubmit = require('./routes/posts');

//use the public folder as the static directory. 
app.use( express.static(path.join(__dirname, 'public')));

app.use('/', formSubmit);

//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(port,()=>console.log(`running on localhost:${port}`))