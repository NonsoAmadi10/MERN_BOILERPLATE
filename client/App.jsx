import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/Others/About';
import FAQ from './pages/Others/FAQ';
import Admin from './pages/Admin/Admin';
import Cart from './pages/Others/Cart';
function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/store" component={Store} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/office" component={Admin} />
          <Route path="/cart" component={Cart} />
          <Route />
        </Switch>
      </Router>
    </Fragment>
  );
}
export default App;
