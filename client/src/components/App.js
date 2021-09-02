import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Home from "../pages/Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import ShoppingCart from "../pages/ShopingCart/ShoppingCart";


import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        {/* <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div> */}
        <React.Fragment>
          <Header />
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => {
                return <Redirect to={"/products"} />;
              }}
            />
            <Route exact path={"/products"} component={Home} />
            <Route exact path={"/products/:id"} component={ProductDetail} />
            <Route exact patr={"/cart"} component={ShoppingCart} />
          </Switch>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
