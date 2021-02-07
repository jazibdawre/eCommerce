import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from './user.js';

import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from './order.js';

import {
  createProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from './products.js';

import { 
  questions, 
  question, 
  editQuestions
} from './chatbot.js';

import { 
  createCategory, 
  categories, 
  updateCategory, 
  deleteCategory 
} from './category.js';

import { searchProduct } from './search.js';

export default {
  //orders
  orders: getOrders,
  myorders: getMyOrders,
  orderById: getOrderById,
  createOrder: addOrderItems,
  updateOrderToPaid: updateOrderToPaid,
  updateOrderToDelivered: updateOrderToDelivered,
  //chatbot
  questions: questions,
  question: question,
  editQuestions: editQuestions,
  //categories
  createCategory: createCategory, 
  categories: categories, 
  updateCategory: updateCategory, 
  deleteCategory: deleteCategory,
  //users
  authUser: authUser,
  registerUser: registerUser,
  getUserProfile: getUserProfile,
  updateUserProfile: updateUserProfile,
  getUsers: getUsers,
  deleteUser: deleteUser,
  getUserById: getUserById,
  updateUser: updateUser,
  //products
  createProduct: createProduct,
  getProduct: getProduct,
  getProductById: getProductById,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  //search
  searchProduct: searchProduct,
};
