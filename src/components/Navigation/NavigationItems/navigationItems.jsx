import React from "react";
import classes from "./navigationItems.css";
import NavigationItem from "./NavigationItem/navigationItem";

const NavigationItems = () => {
  return (
    <ul className={classes.navigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
