import React, { Component } from 'react';
import { Card, Col } from 'react-materialize';

class MainCard extends Component {
  render() {
    return (
      <div className="row center-align">
        <Col s={12}>
          <Card>
            <h1>This is an example</h1>
            <h3>Phone: 801-755-6230</h3>
            <h3>Address: The coolest place on earth, sucka face</h3>
            <h4>I will cry if matt hates this</h4>
          </Card>
        </Col>
      </div>
    );
  }
}

export default MainCard;