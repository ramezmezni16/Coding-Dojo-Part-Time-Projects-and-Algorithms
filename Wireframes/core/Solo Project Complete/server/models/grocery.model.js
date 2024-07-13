const mongoose = require('mongoose');

const GrocerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name must be at least 3 characters']
    },
    type: {
        type: String,
        required: true,
        enum: ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Seafood', 'Grains', 'Snacks', 'Beverages', 'Baked Goods', 'Condiments', 'Canned Goods', 'Frozen Foods', 'Cleaning Supplies', 'Personal Care', 'Household Items', 'Spices and Herbs', 'Baby Products', 'Pet Supplies']

    },
    price: {
        type: Number,
        required: true,
        min : [1, "Price must isn't 0"]
    }
});

const Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery;