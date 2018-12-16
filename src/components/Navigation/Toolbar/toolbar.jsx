import React from "react";
import classes from "./toolbar.css";
import Logo from "../../Logo/logo";
import NavigationItems from "../NavigationItems/navigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/drawerToggle";

const Toolbar = props => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.logo}>
        <Logo />
      </div>
      <nav className={classes.desktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
