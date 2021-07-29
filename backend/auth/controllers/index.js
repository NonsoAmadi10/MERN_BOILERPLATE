import User from '../models';
import { Response, Authentication } from '../../utils';

class UserController {
  static async signUpController(req, res) {
    try {
      const {
        fullName, email, password, adminUser,
      } = req.body;

      const findUser = await User.findOne({ email });

      if (findUser) {
        return Response.clientError(res, 'User exist already', 400);
      }
      const isAdmin = adminUser || false;
      const newUser = await User.create({
        email, fullName, password, isAdmin,
      });
      newUser.setPassword(password);
      await newUser.save();
      const payload = {
        fullName: newUser.fullName,
        email: newUser.email,
      };
      return Response.requestSuccessful(res, payload, 201);
    } catch (err) {
      return Response.serverError(res);
    }
  }

  static async loginController(req, res) {
    try {
      const { email, password } = req.body;
      const findUser = await User.findOne({ email });
      if (!findUser) {
        return Response.clientError(res, 'Email or password does not exist', 400);
      }
      const passwordValid = await findUser.validPassword(password);
      if (!passwordValid) {
        return Response.clientError(res, 'Invalid Login Credentials', 400);
      }
      const token = await Authentication.getToken({
        id: findUser.id,
        isAdmin: findUser.isAdmin,
        email: findUser.email,
      });
      if (token) {
        return Response.requestSuccessful(res, { token }, 200);
      }
      return Response.serverError(res, 'Please try again, an error occured!');
    } catch (err) {
      return Response.serverError(res);
    }
  }
}

export default UserController;
