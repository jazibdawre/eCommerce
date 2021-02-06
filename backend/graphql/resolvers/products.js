import Product from '../../models/productModel.js';
import Category from '../../models/categoryModel.js';

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
};

const getProduct = async (args) => {
  try {
    const product = Product.find({ name: args.name });
    if (product) {
      return product;
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getProductById = async (args) => {
  try {
    const product = Product.find({ _id: args.id });
    if (product) {
      return product;
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateProduct = async (args) => {
  try {
    console.log(args.productId);
    // console.log(args);
    const product = await Product.findById(args.productId);
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }
    await Product.findByIdAndUpdate(args.productId, {
      $set: args.updateProduct,
    });
    const updatedProduct = await Product.findById(args.productId);
    console.log(updatedProduct);
    return updatedProduct;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteProduct = async (args) => {
  try {
    const product = await Product.find({ _id: args.id });
    if (product) {
      const deleted = await Product.findByIdAndDelete(args.id);
      // console.log(deleted);
      return { ...deleted._doc };
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
