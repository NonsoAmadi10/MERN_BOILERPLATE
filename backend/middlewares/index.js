import { Authentication, Response } from '../utils';

class Middleware {
  /**
   *
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @param {callback} next - The callback that passes the request
   * to the next handler
   * @returns {callback} next - The callback that passes the request
   * to the next handler
   * @returns {object} res - Response object containing an error due
   * to invalid token or no token in the request
   */

  static async getToken(req, res, next) {
    const token = req.headers['x-access-token'] || req.query.token || req.body.token;
    if (!token) return Response.clientError(res, 'User not authorized', 401);
    const verifiedToken = await Authentication.verifyToken(token);
    if (!verifiedToken.success) {
      return Response.clientError(res, 'User not authorized', 401);
    }
    req.decoded = verifiedToken;
    return next();
  }

  /**
   *
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @param {callback} next - The callback that passes the request
   * to the next handler
   * @returns {callback} next - The callback that passes the request
   * to the next handler
   * @returns {object} res - Response object containing an error due
   * to unauthorized user
   */

  static async checkAdmin(req, res, next) {
    if (!req.decoded.isAdmin) {
      return Response.clientError(res, 'Only admin can perform this action', 401);
    }
    return next();
  }
}

export default Middleware;
