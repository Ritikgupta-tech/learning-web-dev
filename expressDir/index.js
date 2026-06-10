const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

/*app.use((req,res) => {
    console.log("to get response");
    
    let code ="<h1>fruits</h1> <ul><li>apple</li><li>orange</></ul>";
    res.send(code);
});*/
/*
app.get("/", (req, res) => {
    res.send("you connected root path");
});

app.get("/apple", (req, res) => {
    res.send("you connected apple root path");
});

app.get("/orange", (req, res) => {
    res.send("you connected orange root path");
});*/

// ALWAYS keep this at the end
/*app.get('*', (req, res) => {
    res.send("this page does not exist");
});*/
/*
app.post("/", (req, res) => {
    res.send("you connected post root path");
});*/



app.get("/", (req, res) => {
    res.send("hellow i am root");
});

app.get("/:username/:id", (req, res) => {
    let { username , id } = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}!</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no result");
});