const mongoose = require("mongoose");
const {Schema } = mongoose;

main()
    .then(()=> console.log("connection successful"))
    .catch((err)=>console.log(err));

    async function main() {
        await mongoose.connect("mongodb://127.0.0.1:27017/relation");
    }

    const orderSchema = new Schema({
        item:String,
        price:Number,
    });

    const customerSchema = new Schema({
        name:String,
        orders:[{
            type:Schema.Types.ObjectId,
            ref:"Order",
        },
    ],
    });

   /* customerSchema.pre("findOneAndDelete",async () => {
    console.log("PRE MIDDLEWARE");
    });*/

    customerSchema.post("findOneAndDelete",async (data) => {
        console.log(data);
    });

    const Order = mongoose.model("order",orderSchema);
    const Customer= mongoose.model("Customer", customerSchema);

        //FUNCTIONS
    const findCustomer = async () => {
        let result = await Customer.find({}).populate("orders");
        console.log(result[0]);
    };

    const addCust = async() =>{
        let cust1 =new Customer({
            name:"ritik & Ankit",
        });

        let newOrder = new Order({
            item:"maggi",
            price:250,
        });
        cust1.orders.push(newOrder);

        await newOrder.save();
        await cust1.save();
        console.log("added new customer");

    };

    const delCust = async() =>{
        let data = await Customer.findByIdAndDelete("6a3b6090cba0a8d0260f579c");
        console.log(data);
    };
    delCust();

    //addCust();

   /* const addCustomer = async() =>{
        let cust1 =new customer({
            name:"ritik",
        });

        let order1= await Order.findOne({item:"chips"});
        let order2= await Order.findOne({item:"parle"});

        cust1.orders.push(order1);
        cust1.orders.push(order2);
       let result = await cust1.save();
       console.log(result);
    };

    addCustomer();/*

   /* const addOrders = async()=>{
      let res =  await order.insertMany([
            {item:"samosa",price:10},
            {item:"chips",price:12},
            {item:"parle",price:14}
        ]);
        console.log(res);
    };
    addOrders();*/

