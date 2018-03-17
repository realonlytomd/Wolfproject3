import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import "./About.css";
import WOW from "wowjs";
import logo from "../../../src/img/giphy-tumblr.gif";

class About extends Component {

    componentDidMount() {
        this.button;
        const wow = new WOW.WOW();
        wow.init();
    }        
            
    render() {
      return (
          <div className="body" style={{ marginTop: '60px' }}>
          <Container fluid>  
              <Jumbotron>
                  <h1>Do Your Chores!</h1>
                  <p>Making chores fun again</p>
              </Jumbotron>
              <Row>
                <Col size="md-6">
                    <div className="background">
                        <Jumbotron>
                          <p>Welcome to our chores app! <br />Create a login to keep track of your kids chores.</p>
                            <div className="wow pulse infinite" data-wow-delay="5.0s">
                            <Route render={({ history}) => (
                                <button className="btn btn-default" 
                                type='button'
                                onClick={() => { history.push('/users') }}
                                >
                                Sign Up!
                                </button>
                            )} />
                            </div>                
                        </Jumbotron>
                    </div>
                </Col>
                <Col size="md-3">
                      <Jumbotron>
                          <p><strong>Developers:</strong> <br />Tom McLaughlin <br /> Tim McWilliams<br /> Richard Nguyen<br /> David Bierma</p>
                      </Jumbotron>
                </Col>
                <Col size="md-3">
                    <div className="jumbo">
                      <Jumbotron>
                            <img className="img-responsive" src={logo} alt="loading..." />
                      </Jumbotron>
                    </div>
                </Col>
              </Row>
          </Container>
          </div>
        ); // closing tag from return
      } // closing tag from render
    } // closing tag from Component

    export default About;