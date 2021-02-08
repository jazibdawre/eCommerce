import Product from '../../models/productModel.js';
import Category from '../../models/categoryModel.js';
import Brand from '../../models/brandModel.js';

// To cache getAllProducts, getAllCategories, getProductByCategories, getProductById
// redis.set("key", JSON.stringify(obj));

const createProduct = async (args, { req, redis }) => {
  try {
    const newBrand = new Brand({
      name: args.productInput.brand,
    });

    const resp = await newBrand.save();

    const product = new Product({
      name: args.productInput.name,
      price: args.productInput.price,
      user: args.productInput.user,
      image: args.productInput.image,
      brand: resp._id,
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

const getProduct = async (args, { req, redis }) => {
  try {
    const product = Product.find({ name: args.name }).populate(
      'user brand category subcategory'
    );
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

const getProductById = async (args, { req, redis }) => {
  try {
    const product = Product.find({ _id: args.id }).populate(
      'user brand category subcategory'
    );
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

const updateProduct = async (args, { req, redis }) => {
  try {
    console.log(args.productId);
    // console.log(args, { req, redis });
    const product = await Product.findById(args.productId);
    if (!product) {
      res.status(404);
      throw new Error('Product not found');
    }

    await Brand.deleteOne({ _id: product.brand });

    const newBrand = new Brand({
      name: args.updateProduct.brand,
    });

    const resp = await newBrand.save();

    const newUpdatedProduct = {
      name: args.updateProduct.name,
      price: args.updateProduct.price,
      image: args.updateProduct.image,
      brand: resp._id,
      category: args.updateProduct.category,
      countInStock: args.updateProduct.countInStock,
      description: args.updateProduct.description,
    };

    await Product.findByIdAndUpdate(args.productId, {
      $set: newUpdatedProduct,
    });
    const updatedProduct = await Product.findById(args.productId);
    console.log(updatedProduct);
    return updatedProduct;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteProduct = async (args, { req, redis }) => {
  try {
    const product = await Product.find({ _id: args.id });
    if (product) {
      await Brand.deleteOne({ _id: product.brand });
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
