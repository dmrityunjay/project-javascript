const express = require("express");

const app = express();

const PORT = process.env.PORT || 8800;

app.use(express.json());

//GET
app.get('/',(req,res) =>{
    res.send("node.js server is running");
});

//GET
app.get("/getstudents",(req,res) => {
    res.send("get all student");
});

//POST
app.post("/addstudents",(req,res) => {
    res.send("student added");
});

//PUT
app.put("/updatestudents",(req,res) => {
    res.send("student completely added");
});

//patch
app.patch("/partialstudents", (req,res) => {
    res.send("student partially updated");
});

//DELETE
app.delete("/deletestudents",(req,res) => {
    res.send("student delete");
});

//START SERVER
app.listen(PORT,"0.0.0.0",() => {
    console.log("server running on port $ {PORT});
});

