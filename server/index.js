var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require("cors");
var db = require('./server');
const {createPool} = require('mysql');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    const sql = "SELECT * FROM course";
    db.query(sql, (err, result)=> {
        if (err) throw err;
        console.log("result", result);
    });
})




app.listen(8800, ()=>{
    console.log("Connected to the backend");
});