const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.use((req,res) => {
    console.log("to get response");
    
    let code ="<h1>fruits</h1> <ul><li>apple</li><li>orange</></ul>";
    res.send(code);
});