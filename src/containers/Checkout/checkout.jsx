import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/checkoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/contactData";
class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (const param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else ingredients[param[0]] = +param[1];
    }

    this.setState({ ingredients, totalPrice: price });
  }

  checkoutCancelled = () => {
    this.props.history.goBack();
  };

  checkoutContinued = () => {
    this.props.history.replace("checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelled}
          checkoutContinued={this.checkoutContinued}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={props => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
