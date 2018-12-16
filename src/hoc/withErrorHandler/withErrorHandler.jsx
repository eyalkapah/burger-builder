import React, { Component } from "react";
import Modal from "../../components/UI/Modal/modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceotor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
        }
      );
    }

    componentWillUnmount() {
      console.log(
        "Unmount Interceptors: ",
        this.reqInterceptor,
        this.resInterceotor
      );
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceotor);
    }

    handleErrorConfirmation = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <>
          <Modal show={this.state.error} onClose={this.handleErrorConfirmation}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
