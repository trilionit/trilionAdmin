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

app.get('/accounts', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/accounts.html'))
})
app.get('/addAccount', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/addAccount.html'))
})
app.get('/addEmail', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/addEmail.html'))
})
app.get('/demo', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/demo.html'))
})
app.get('/editAccount', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/editAccount.html'))
})
app.get('/editEmail', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/editEmail.html'))
})
app.get('/package', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/package.html'))
})
//send any route to index.html where the react app is mounted
app.get('*', (req,res)=>{
	res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(port,()=>console.log(`running on localhost:${port}`))