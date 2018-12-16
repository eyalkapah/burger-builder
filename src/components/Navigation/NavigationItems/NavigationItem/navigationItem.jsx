import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navigationItem.css";

const NavigationItem = props => {
  return (
    <li className={classes.navigationItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
