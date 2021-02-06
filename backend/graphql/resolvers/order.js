import Order from '../../models/orderModel.js';

const addOrderItems = async (args) => {
  try {
    const order = new Order({
      user: args.orderInput.user,
      orderItems: args.orderInput.orderItems,
      shippingAddress: args.orderInput.shippingAddress,
      paymentMethod: args.orderInput.paymentMethod,
      paymentResult: args.orderInput.paymentResult,
      taxPrice: args.orderInput.taxPrice,
      shippingPrice: args.orderInput.shippingPrice,
      totalPrice: args.orderInput.totalPrice,
      isPaid: args.orderInput.isPaid,
      isDelivered: args.orderInput.isDelivered,
    });

    if (args.orderInput.paidAt) {
      order.paidAt = new Date(args.orderInput.paidAt);
    }

    if (args.orderInput.deliveredAt) {
      order.deliveredAt = new Date(args.orderInput.deliveredAt);
    }

    const res = await order.save();
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getOrderById = async (args) => {
  try {
    const order = await Order.findById(args.orderId);
    // .populate(
    //   'user',
    //   'name email'
    // );
    // To be kept commented until users are implemented and graohql schema is changed

    if (order) {
      return order;
    } else {
      throw new Error('Order not found');
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateOrderToPaid = async (args) => {
  try {
    const order = await Order.findById(args.orderId);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      };

      const updatedOrder = await order.save();
      return updatedOrder;
    } else {
      throw new Error('Order not found');
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateOrderToDelivered = async (args) => {
  try {
    const order = await Order.findById(args.orderId);

    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      return updatedOrder;
    } else {
      throw new Error('Order not found');
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getMyOrders = async (args) => {
  try {
    const orders = await Order.find({ user: args.userId });
    return orders.map((order) => {
      return {
        ...order._doc,
        // Here try/catch maybe?
        deliveredAt:
          order._doc.deliveredAt != null
            ? order._doc.deliveredAt.toISOString()
            : null,
        paidAt:
          order._doc.paidAt != null ? order._doc.paidAt.toISOString() : null,
      };
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getOrders = async (args) => {
  try {
    const orders = await Order.find({});
    return orders.map((order) => {
      return {
        ...order._doc,
        // Here try/catch maybe?
        deliveredAt:
          order._doc.deliveredAt != null
            ? order._doc.deliveredAt.toISOString()
            : null,
        paidAt:
          order._doc.paidAt != null ? order._doc.paidAt.toISOString() : null,
      };
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
};
