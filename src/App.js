import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Badge,
  Alert as BootStrapAlert
} from "react-bootstrap";
import PortalPure from "./Portal";
import withPortal from "./withPortal";
import withComponentDelete from "./withDelete";

const portalDomEl = document.querySelector(".alerts-list");

const Portal = withPortal(portalDomEl)(PortalPure);
const Alert = withComponentDelete(5000)(BootStrapAlert);

class App extends React.PureComponent {
  state = {
    value: "",
    alerts: []
  };
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleChange = ({ target: { value } }) => {
    if (value) {
      this.setState({ value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    if (value) {
      this.setState({
        alerts: [...this.state.alerts, value]
      });
    }
    this.setState({ value: "" });
    this.inputRef.current.focus();
  };

  render() {
    const { value, alerts } = this.state;
    const variants = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark"
    ];
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <Badge variant="secondary">Home work #13</Badge>
                    <h1>Alerts app</h1>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter alert text"
                    onChange={this.handleChange}
                    value={value}
                    ref={this.inputRef}
                  />
                  <Form.Text className="text-muted">Enter alert text</Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={!value}>
                  Add Alert
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Portal>
          <Container style={{ marginTop: 50 }}>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                {alerts.map((alert, index) => {
                  const variant = variants[index % (variants.length + 1)];
                  console.log(index % variant.length);
                  return (
                    <Alert key={index} variant={variant}>
                      {alert}
                    </Alert>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </Portal>
      </div>
    );
  }
}

export default App;
