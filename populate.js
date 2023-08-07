require('dotenv').config()
const connectDB = require('./db/connect')
const jsonProducts = require ('./produts.json')
const Product = require('./models/product')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log("Succefully connected to database")
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start();