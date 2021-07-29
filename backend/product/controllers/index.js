import Product from '../models';
import {Response} from '../../utils/';

class ProductController {
  static async createProduct(req, res) {
    try {
      const {
        name, imageUrl, price, quantity, status, description,
      } = req.body;

      const newProduct = {
        name, imageUrl, price, quantity, status, description,
      };

      const createProd = await Product.create(newProduct);

      return Response.requestSuccessful(res, createProd.toObject(), 201);
    } catch (err) {
      console.log(err);
      return Response.serverError(res);
    }
  }

  static async getProduct(req, res) {
    try {

      const { id } = req.params;
      const findProduct = await Product.findOne({_id: id });
      if(findProduct) {
        return Response.requestSuccessful(res, findProduct.toObject(), 200);
      }
      return Response.clientError(res, 'Product does not exist', 404);
    } catch (err) {
      console.log(err);
      return Response.serverError(res);
    }
  }
}

export default ProductController;
