import Product from '../../models/productModel.js';

// Ignore results with confidence score less than 7
export const searchProduct = async (args) => {
  const prods = await Product.fuzzySearch(args.searchTerm);
  console.log(prods);
  return prods;
};
