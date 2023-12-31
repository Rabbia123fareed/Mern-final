const { Schema, model } = require('mongoose')

const ProductSchema = new Schema(
    {
        productname: {
            type: String,
            unique: true,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        discount: {
            type: Number,
          
        },
        thumbnail: [
            {
                type: String,
                required: true
            }

        ]
            
           
        
        ,
        images : [
            {
                type: String,
                required: true
            }
        ]
        
    }
)

const Product = model('product', ProductSchema)
module.exports = Product