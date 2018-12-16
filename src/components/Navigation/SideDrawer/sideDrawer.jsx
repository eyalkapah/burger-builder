import React from "react";
import Logo from "../../Logo/logo";
import NavigationItems from "../NavigationItems/navigationItems";
import classes from "./sideDrawer.css";
import Backdrop from "../../UI/Backdrop/backdrop";

const SideDrawer = props => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (props.onOpen) attachedClasses = [classes.sideDrawer, classes.open];
  return (
    <React.Fragment>
      <Backdrop show={props.onOpen} clicked={props.onClose} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
