import React from "react";
import classes from "./burger.css";
import BurgerIngredient from "./BurgerIngredients/burgerIngredients";
import { transformToList } from "../../helpers/utils";

const Burger = props => {
  const transformedIngredients = transformToList(props.ingredients);
  let burgers = {};
  if (transformedIngredients.length === 0)
    burgers = <p>Please start adding ingredients!</p>;
  else
    burgers = transformedIngredients.map((ing, index) => (
      <BurgerIngredient key={ing + index} type={ing} />
    ));

  return (
    <div className={classes.burger}>
      <BurgerIngredient type="bread-top" />
      {burgers}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
