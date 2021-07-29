import Controller from '../controllers';
import Middleware from '../../middlewares';

const productRoute = (app) => {
  app.post('/api/v1/product', Middleware.getToken, Middleware.checkAdmin, Controller.createProduct);
  app.get('/api/v1/product/:id', Controller.getProduct);
};

export default productRoute;
