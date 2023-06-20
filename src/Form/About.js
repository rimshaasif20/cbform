import React from 'react';
import { Card } from 'react-bootstrap';

function About(props) {
  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>Description</Card.Title>
        {props.about.map((description, index) => (
          <Card.Text key={index}>
            <p>{description}</p>
          </Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
}

export default About;
