import React, { Component } from "react";
import BurgerBuilder from "./containers/BurgerBuilder/burgerBuilder";
import Layout from "./containers/Layout/layout";
import Checkout from "./containers/Checkout/checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/Orders/orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
