import OrderController from '../controllers';
import Middleware from '../../middlewares';

const orderRoute = (app) => {
  app.post('/api/v1/order', Middleware.getToken, OrderController.createOrder);
  app.get('/api/v1/orders', Middleware.getToken, OrderController.getMyOrder);
  app.get('/api/v1/allOrders', Middleware.getToken, Middleware.checkAdmin, OrderController.getAllOrders);
  app.patch('/api/v1/order/:id/update', Middleware.getToken, Middleware.checkAdmin, OrderController.updateOrder);
};

export default orderRoute;
