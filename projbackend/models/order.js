var mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    }
});
const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const orderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
},
{timespamps: true});

const Order = mongoose.model("Order", orderSchema);

module.exports={Order,ProductCart}

