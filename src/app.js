import express from "express";

const app = express();

console.log("I am coming back stronger!!");


app.use("/test", (req, res) => {
    res.send('Hello from the server!')
})

app.use("/hello", (req, res) => {
    res.send('Hello from Hello Route')
})

app.use("/dashboard",(req,res)=>{
res.send("Dashboard Loading...")
})

app.listen(7777, () => {
    console.log("Server is successfully listening on the port 7777....");

});