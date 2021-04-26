import React, { Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <div style={{ marginTop: "20px" }}>
            <h2>Home of Admin</h2>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
