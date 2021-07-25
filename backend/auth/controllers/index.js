import User from '../models';
import Responses from '../../utils/Response';
import Authentication from '../../utils/authentication';

class UserController {
  static async signUpController(req, res) {
    try {
      const { fullName, email, password } = req.body;

      const findUser = await User.findOne({ email });

      if (findUser) {
        return Responses.clientError(res, 'User exist already', 400);
      }

      const newUser = await User.create({ email, fullName, password });
      newUser.setPassword(password);
      await newUser.save();
      const payload = {
        fullName: newUser.fullName,
        email: newUser.email
      };
      return Responses.requestSuccessful(res, payload, 201);
    } catch (err) {
      return Responses.serverError(res);
    }
  }

  static async loginController(req, res) {
    try {
      const { email, password } = req.body;
      const findUser = await User.findOne({ email });
      if (!findUser) {
        return Responses.clientError(res, 'Email or password does not exist', 400);
      }
      const passwordValid = await findUser.validPassword(password);
      if (!passwordValid) {
        return Responses.clientError(res, 'Invalid Login Credentials', 400);
      }
      const token = await Authentication.getToken({
        id: findUser.id,
        isAdmin: findUser.isAdmin,
        email: findUser.email
      });
      if (token) {
        return Responses.requestSuccessful(res, { token }, 200);
      }
      return Responses.serverError(res, 'Please try again, an error occured!');
    } catch (err) {
      return Responses.serverError(res);
    }
  }
}

export default UserController;
