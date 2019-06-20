// const fetch = require("node-fetch");
const path = require ('path')
const express = require('express')
const cors = require('cors')
const app = express()

var http = require('http');
var fs = require('fs');

// var file = fs.createWriteStream("file.wav");
// var file2 = fs.createWriteStream("file2.wav");

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'))
})
app.use(express.static('public'));
app.use(cors)
app.listen(8080,()=>console.log('listening to port 8080'))

// fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(res=>{
//     return res.json()
// }).then(res=>{
//     console.log(res)

// })

// var request = http.get('http://api.voicerss.org/?key=db1149065e6f4ef582048f2775ce8340&hl=en-us&r=-5&src=Suka i  want to eat', function(response) {
//   response.pipe(file2);
// });
// fetch('http://api.voicerss.org/?key=db1149065e6f4ef582048f2775ce8340&hl=en-us&src=Hello, world!').then(res=>{
//     return res.json()
// }).then(res=>{
//     console.log(res)

// })
// app.listen(8080,()=>console.log('listening to port 8080'))
