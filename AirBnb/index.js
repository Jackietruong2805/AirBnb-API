const { response } = require('express');
const express = require('express');
const app = express();
const port = 3333;

app.use(express.static("."));
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("hello world!");
})

app.listen(port, ()=>{
    console.log("hello")
})