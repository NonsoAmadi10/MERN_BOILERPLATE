import Controller from '../controllers';

const authRoute = (app) => {
  app.post('/api/v1/auth/register', Controller.signUpController);
  app.post('/api/v1/auth/login', Controller.loginController);
};

export default authRoute;
