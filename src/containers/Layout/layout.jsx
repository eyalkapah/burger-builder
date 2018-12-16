import React, { Component } from "react";
import classes from "./layout.css";
import SideDrawer from "../../components/Navigation/SideDrawer/sideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/toolbar";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  handleCloseSideDrawer = () => {
    this.setState({ showSideDrawer: false });
  };

  handleSideDrawerToggle = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.handleSideDrawerToggle} />
        <SideDrawer
          onClose={this.handleCloseSideDrawer}
          onOpen={this.state.showSideDrawer}
        />
        <main className={classes.content}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
