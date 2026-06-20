const mongoose = require("mongoose");
main()
    .then( () => {
        console.log("connection successfully");
    })
    .catch((err) => console.log(err));
    async function main() {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");

    }
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);

User.findOneAndDelete({name:"ritik11"}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

/*User.deleteMany({age:55}).then((res)=>{
    
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});*/

/*User.deleteOne({name:"ritik"}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
*/

/*User.updateMany({age:{$gt :50}},{age:55}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
*/
/*User.findOne({age: {$gt: 40}})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});*/

/*User.insertMany([
    {name: "ritik1", email:"rtik1@gmsil.in" ,age:419},
    {name: "ritik11", email:"rtik11@gmsil.in" ,age:19},
    {name: "ritik111", email:"rtik111@gmsil.in" ,age:29},

]).then((res) =>{
    console.log(res);
});*/

/*
const user1 = new User({name: "ritik", email:"rtik@gmsil.in" ,age:49});
const user2 = new User({name: "ritikaa", email:"rtikaaa@gmsil.in" ,age:49});

user1.save()
user2.save()
*/
