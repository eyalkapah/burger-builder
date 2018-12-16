import React, { Component } from "react";
import classes from "./modal.css";
import Backdrop from "../Backdrop/backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    )
      return true;
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.onClose} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
