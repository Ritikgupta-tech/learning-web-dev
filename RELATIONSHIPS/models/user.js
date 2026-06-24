const mongoose = require("mongoose");
const {Schema } = mongoose;

main()
    .then(()=> console.log("connection successful"))
    .catch((err)=>console.log(err));

    async function main() {
        await mongoose.connect("mongodb://127.0.0.1:27017/relation");
    }

    const userSchema = new Schema({
        username : String,
        addresses:[
            {
                location:String,
                city:String,
            },
        ],
    });

    const User = mongoose.model("User",userSchema);

    const addUser = async() =>{
        let user1 = new User({
            username:"shertheking",
            addresses:[{
                location: "221B baker street",
                city:"london"
            }]
        });
        user1.addresses.push({location:"sector-5 gida GDA",city:"gorakhpur"});
       let result = await user1.save();
       console.log(result);
    };

    addUser();
