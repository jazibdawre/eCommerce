import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from './order.js';

import { 
  questions,
  question,
  editQuestions,
 } from './chatbot.js';

export default {
  orders: getOrders,
  myorders: getMyOrders,
  orderById: getOrderById,
  createOrder: addOrderItems,
  updateOrderToPaid: updateOrderToPaid,
  updateOrderToDelivered: updateOrderToDelivered,
  questions: questions,
  question: question,
  editQuestions: editQuestions,
};
