const express = require('express')  
var cors = require('cors')
const bodyParser = require('body-parser') 
const mongodb = require('./services/mongo_service');
const companyController = require('./controllers/main');

var urlBodyEncoder = bodyParser.urlencoded({ extended: false}) 
const app = express() 
app.use(bodyParser.json())
app.use(cors()) 

app.post('/create', companyController.createCategory);
app.post('/update', companyController.updateCategory);
app.post('/delete', companyController.deleteCategory);

var port = process.env.PORT || 8000; 
app.listen(port);
console.log("Server running on port "+ port)
module.exports = app;