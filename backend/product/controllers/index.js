import Product from '../models';
import { Response } from '../../utils';

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
      return Response.serverError(res);
    }
  }

  static async getProduct(req, res) {
    try {
      const { id } = req.params;
      const findProduct = await Product.findById(id);
      if (findProduct) {
        return Response.requestSuccessful(res, findProduct.toObject(), 200);
      }
      return Response.clientError(res, 'Product does not exist', 404);
    } catch (err) {
      return Response.serverError(res);
    }
  }

  static async getAllProduct(req, res) {
    try {
      const getProducts = await Product.find({}).exec();
      return Response.requestSuccessful(res, getProducts, 200);
    } catch (err) {
      console.log(err);
      return Response.serverError(res);
    }
  }

  static async updateProduct(req, res) {
    try {
      const { id } = req.params;
      const findProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (findProduct) {
        return Response.requestSuccessful(res, findProduct.toObject(), 200);
      }

      return Response.clientError(res, 'Product does not exist!', 404);
    } catch (err) {
      console.log(err);
      return Response.serverError(res);
    }
  }

  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      await Product.findByIdAndDelete(id);
      return Response.requestSuccessful(res, { _message: 'Delete Successful!' }, 200);
    } catch (err) {
      return Response.serverError(res);
    }
  }
}

export default ProductController;
