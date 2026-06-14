const mongoose= require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats=[
{
    from:"kartika",
    to:"ritika",
    msg:"send me your exam schedulea",
    created_at: new Date()
},
{
    from:"kartikaa",
    to:"ritikaa",
    msg:"send me your exam scheduleaa",
    created_at: new Date()
},
{
    from:"kartikaaa",
    to:"ritikaaa",
    msg:"send me your exam schedule2aaa",
    created_at: new Date()
},
{
    from:"kartikaaaa",
    to:"ritikaaaa",
    msg:"send me your exam scheduleaaaa",
    created_at: new Date()
},
{
    from:"kartikaaaaa",
    to:"ritikaaaaa",
    msg:"send me your exam scheduleaaaaa",
    created_at: new Date()
},
{
    from:"kartikaaaaaa",
    to:"ritikaaaaaa",
    msg:"send me your exam scheduleaaaaa",
    created_at: new Date()
}];

Chat.insertMany(allChats);


