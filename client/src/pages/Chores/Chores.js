import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import CompleteBtn from "../../components/CompleteBtn" ;

class Chores extends Component {
  state = {
    chores: [],
    title: "",
    kid: "",
    reward: ""
  };

  componentDidMount() {
    this.loadChores();
  }

  loadChores = () => {
    API.getChores()
      .then(res =>
        this.setState({ chores: res.data, title: "", kid: "", reward: "" })
      )
      .catch(err => console.log(err));
  };

  deleteChore = id => {
    API.deleteChore(id)
      .then(res => this.loadChores())
      .catch(err => console.log(err));
  };

  // add function for complete chore button
  completeChore = id => {
    API.putChore(id)
      .then(res => this.loadChores())
      .catch(err => console.log(err));
  };



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.kid) {
      API.saveChore({
        title: this.state.title,
        kid: this.state.kid,
        reward: this.state.reward
      })
        .then(res => this.loadChores())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Chores Should I Do?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Chore Name (required)"
              />
              <Input
                value={this.state.kid}
                onChange={this.handleInputChange}
                name="kid"
                placeholder="Kid (required)"
              />
              <TextArea
                value={this.state.reward}
                onChange={this.handleInputChange}
                name="reward"
                placeholder="Reward (Optional)"
              />
              <FormBtn
                disabled={!(this.state.kid && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Chore
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Chores On My List</h1>
            </Jumbotron>
            {this.state.chores.length ? (
              <List>
                {this.state.chores.map(chore => (
                  <ListItem key={chore._id}>
                    <Link to={"/chores/" + chore._id}>
                      <strong>
                        {chore.title} by {chore.kid}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteChore(chore._id)} />
                    <CompleteBtn onClick={() => this.putChore(chore._id)} /> 
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chores;
