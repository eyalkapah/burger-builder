import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./burgerIngredients.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.breadBottom} />;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.breadTop}>
            <div className={classes.seeds1} />
            <div className={classes.seeds2} />
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.meat} />;
        break;
      case "cheese":
        ingredient = <div className={classes.cheese} />;
        break;
      case "bacon":
        ingredient = <div className={classes.bacon} />;
        break;
      case "salad":
        ingredient = <div className={classes.salad} />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
