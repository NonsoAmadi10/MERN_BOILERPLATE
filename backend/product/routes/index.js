import Controller from '../controllers';
import Middleware from '../../middlewares';

const productRoute = (app) => {
  app.post('/api/v1/product', Middleware.getToken, Middleware.checkAdmin, Controller.createProduct);
  app.get('/api/v1/product/:id', Controller.getProduct);
  app.get('/api/v1/products', Controller.getAllProduct);
  app.put('/api/v1/product/:id', Middleware.getToken, Middleware.checkAdmin, Controller.updateProduct);
  app.delete('/api/v1/product/:id', Middleware.getToken, Middleware.checkAdmin, Controller.deleteProduct);
};

export default productRoute;
