import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    chore: {}
  };
  // When this component mounts, grab the chore with the _id of this.props.match.params.id
  
  componentDidMount() {
    API.getChore(this.props.match.params.id)
      .then(res => this.setState({ chore: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.chore.kid}: {this.state.chore.title}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Reward:</h1>
              <h1>
                {this.state.chore.reward}
              </h1>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Chores</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
