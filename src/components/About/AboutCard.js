import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Brayan Ngowi </span>
            from <span className="purple"> Moshi, Tanzania.</span>
            <br />
            I am currently working as freelancer  software developer.
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In the end when i'm asked what i did with my life i want to be able to say my code changed something in the Tech world!"{" "}
          </p>
          <footer className="blockquote-footer">Master-Bry</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
