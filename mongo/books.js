const mongoose = require("mongoose");
main()
    .then( () => {
        console.log("connection successfully");
    })
    .catch((err) => console.log(err));
    async function main() {
        await mongoose.connect("mongodb://127.0.0.1:27017/amazon");

    }
const bookSchema = new mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
    },
    discount:{
        type:Number,
        default:"10"
    }
});

const Book = mongoose.model("Book",bookSchema);

let book1= new Book({
    tittle:"mathmatics xii",
    author:"rd sharma",
    price:12,
});

book1
.save()
.then(res =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
});

