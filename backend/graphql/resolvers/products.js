import Category from '../../models/category.js';
import Product from '../../models/productModel.js';

const createProduct = async (args) => {
    try {
        const product = new Product({
            name: args.productInput.name,
            price: args.productInput.price,
            user: args.productInput.user,
            image: args.productInput.image,
            brand: args.productInput.brand,
            category: args.productInput.category,
            countInStock: args.productInput.countInStock,
            numReviews: args.productInput.numReviews,
            description: args.productInput.description,
        }); 
        const res = await product.save();
        return res;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const getProduct = async (args) => {
    try {
        const product = Product.find({name: args.name});
        if (!product) {
            throw new Error('Product not found')
        } 
        return product;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const getProductById = async (args) => {
    try {
        const product = Product.find({_id: args.id});
        if (!product) {
            throw new Error('Product not found')
        } 
        return product;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const getProductByCategory = async (args) => {
    try {
        const products = await Product.find({category: args.id});
        if(!products) {
            throw new Error('Product not found')
        }
        return products;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const updateProduct = async (args) => {
    try {
        const product = await Product.findById(args.productId);
        if(!product) {
            throw new Error('Product not found')
        }
        await Product.findByIdAndUpdate(args.productId, {$set: args.updateProduct});
        const updatedProduct = await Product.findById(args.productId);
        return updatedProduct;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const deleteProduct = async (args) => {
    try {
        const product = await Product.find({_id: args.id});
        if(!product) {
            throw new Error('Product not found')
        }
        const deleted = await Product.findByIdAndDelete(args.id);
        return {...deleted._doc};
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export  {
    createProduct,
    getProduct,
    getProductById,
    getProductByCategory,
    updateProduct,
    deleteProduct
}