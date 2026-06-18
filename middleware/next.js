const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req,res,next)=>{
    let{token} = req.query;
    if (token==="giveaccess")
    {
     return next();
    }
    throw new ExpressError(401,"access denied");
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});

app.use((err,req,res,next) =>{
    let {
        status , message
    } = err;
    res.status(status).send(message);
});

/*app.use((req,res,next) =>{
    console.log("hi, i am 1st middleware");
    next();
});


app.use((req,res,next)=>{
    console.log("hi ia am 2nd root");
    next();
});
*/

/*app.use((req,res,next)=>{
    req.time =new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.pathname ,req.time);
    next();
});
app.get("/",(req,res)=>{
    res.send("hi i am root");
});

app.get("/random",(req,res)=>{
    res.send("hi ia am random");
});*/




app.listen(3000,() =>{
    console.log("listening to port 3000");
});