import React from "react";
// import "./person.component.css";
import Card from "react-bootstrap/Card";
//! .... !//
function Person({ name, email, phone, img, location }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>{location}</Card.Subtitle>
        <Card.Body>
          <Card.Text>{phone}</Card.Text>
          <Card.Footer>
            <small>{email}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Person;
