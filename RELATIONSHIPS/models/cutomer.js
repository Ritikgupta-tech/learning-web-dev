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
            ref:"Order"
        }]
    });

    const Order = mongoose.model("order",orderSchema);
    const customer= mongoose.model("Customer", customerSchema);

    const addCustomer = async() =>{
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

    addCustomer();

   /* const addOrders = async()=>{
      let res =  await order.insertMany([
            {item:"samosa",price:10},
            {item:"chips",price:12},
            {item:"parle",price:14}
        ]);
        console.log(res);
    };
    addOrders();*/

