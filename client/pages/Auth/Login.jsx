import React from 'react';
import Auth from '../../components/Auth';

function Login() {
  return (
    <div className="bg-gray-50">
      <Auth authType="Login" authAction="signin" />
    </div>
  );
}

export default Login;
