const express = require('express');

const app = express();

app.use(express.static("public"))

app.get("/home",(req,res,next) =>{
    //__dirname
    res.sendFile(__dirname + "/views/home.html")
})
app.get("/about",(req,res,next) =>{
    //__dirname
    res.sendFile(__dirname + "/views/about.html")
})
app.get("/photoGallery",(req,res,next) =>{
    //__dirname
    res.sendFile(__dirname + "/views/photoGallery.html")
})
app.get("/works",(req,res,next) =>{
    //__dirname
    res.sendFile(__dirname + "/views/works.html")
})

app.listen(3000,()=>{
    console.log("connection succefully established")
})