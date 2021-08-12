import Order from '../models';
import { Response } from '../../utils';

class OrderController {
  static async createOrder(req, res) {
    try {
      const {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
      } = req.body;

      if (orderItems && orderItems.length === 0) {
        return Response.clientError(res, 'No Order Items Found!', 400);
      }
      const newOrder = {
        user: req.decoded.id,
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
      };
      const createNew = await Order.create(newOrder);
      return Response.requestSuccessful(res, createNew.toObject(), 201);
    } catch (err) {
      return Response.serverError(res);
    }
  }

  static async getMyOrder(req, res) {
    try {
      const orders = await Order.find({ user: req.decoded.id });
      return Response.requestSuccessful(res, orders, 200);
    } catch (err) {
      return Response.serverError(res);
    }
  }

  static async getAllOrders(req, res) {
    try {
      const allOrders = await Order.find({}).populate('user', 'id email fullName');
      return Response.requestSuccessful(res, allOrders, 200);
    } catch (err) {
      return Response.serverError(res);
    }
  }

  static async updateOrder(req, res) {
    try {
      const order = await Order.findById(req.params.id);
      if (order) {
        order.isDelivered = true;
        order.deliveredAt = Date.now();

        const updatedOrder = await order.save();

        return Response.requestSuccessful(res, updatedOrder.toObject(), 200);
      }

      return Response.clientError(res, 'Order does not exist', 404);
    } catch (err) {
      return Response.serverError(res);
    }
  }
}
export default OrderController;
