import React, { Component } from "react";
import Burger from "../../components/Burger/burger";
import BuildControls from "../../components/Burger/BuildControls/buildControls";
import Modal from "../../components/UI/Modal/modal";
import OrderSummary from "../../components/Burger/OrderSummary/orderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.4, meat: 1.3, bacon: 0.7 };
const TOTAL_PRICE = 4;
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: TOTAL_PRICE,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("https://react-my-burger-7a388.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => this.setState({ error }));
  }

  updatePurchaseState = newPrice => {
    const purchasable = newPrice > TOTAL_PRICE;
    this.setState({ purchasable });
  };

  handleAddIngredient = type => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

    this.updatePurchaseState(newPrice);
  };

  handleRemoveIngredient = type => {
    const newCount = this.state.ingredients[type] - 1;

    if (newCount < 0) return;

    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceDeduction;

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

    this.updatePurchaseState(newPrice);
  };

  handlePurchase = () => {
    this.setState({ purchasing: true });
  };

  handleCancel = () => {
    this.setState({ purchasing: false });
  };

  handleContinue = () => {
    const queryParams = [];
    for (const i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + "=" + this.state.ingredients[i]);
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };

  render() {
    const disableInfo = { ...this.state.ingredients };

    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = <Spinner />;
    if (this.state.error) burger = <p>Can't fetch ingredients!</p>;

    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            add={this.handleAddIngredient}
            remove={this.handleRemoveIngredient}
            disabled={disableInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            onOrder={this.handlePurchase}
          />
        </>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseCanceled={this.handleCancel}
          purchaseContinued={this.handleContinue}
        />
      );
    }

    if (this.state.loading) orderSummary = <Spinner />;

    return (
      <React.Fragment>
        <Modal show={this.state.purchasing} onClose={this.handleCancel}>
          {orderSummary}
        </Modal>
        {burger}
      </React.Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
