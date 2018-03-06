import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class User extends Component {
  state = {
    username: "",
    password: "",
   
  };

  componentDidMount() {
    this.loadUser();
  }

  load User = () => {
    API.get User()
      .then(res =>
        this.setState({  User: res.data, name: "", password: "" })
      )
      .catch(err => console.log(err));
  };

  deleteChore = id => {
    API.deleteUser(id)
      .then(res => this.load User())
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
    if (this.state.user && this.state.password) {
      API.saveUser({
        title: this.state.user,
        kid: this.state.password
        
      })
        .then(res => this.load User())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Input Login</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.user}
                onChange={this.handleInputChange}
                name="user"
                placeholder="User Name (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              
              <FormBtn
                disabled={!(this.state.user && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Submit Login
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1> User On My List</h1>
            </Jumbotron>
            {this.state. User.length ? (
              <List>
                {this.state. User.map(chore => (
                  <ListItem key={chore._id}>
                    <Link to={"/ Login/" + user._id}>
                      <strong>
                        {user.username} by {user.password}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteUser(user._id)} />
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

export default  User;