import React from "react";

const withPortal = domElem => Component => {
  class WithUsersHOC extends React.Component {
    render() {
      return <Component {...this.props} target={domElem} />;
    }
  }
  return WithUsersHOC;
};

export default withPortal;
