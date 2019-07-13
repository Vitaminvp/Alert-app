import * as React from "react";
import * as ReactDOM from "react-dom";

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    this.props.target.appendChild(this.el);
  }

  componentWillUnmount() {
    this.props.target.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
