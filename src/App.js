import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';


import NavBar from './components/molecules/NavBar/NavBar';
import ProductList from './components/molecules/ProductList/ProductList';
import Detail from './components/molecules/Detail/Detail';
import Cart from './components/molecules/Cart/Cart';
import Default from './components/molecules/Default/Default';
// import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Detail} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
