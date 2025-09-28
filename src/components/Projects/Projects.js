import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mb from "../../Assets/Projects/mb.png";
import tourExplorer from "../../Assets/Projects/TourExplorer.png";
import bio from "../../Assets/Projects/bio.png";
import touros from "../../Assets/Projects/touros.png";

 function Projects() {
 return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mb}
              isBlog={false}
              title="GIT BIO"
              description="Personal Github portfolio"
              ghLink="https://github.com/master-bry/master-bry.github.io"
              demoLink="https://master-bry2.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bio}
              isBlog={false}
              title="Portifolio"
              description="Personal portfolio"
              ghLink="https://github.com/master-bry/Portfolio/"
              demoLink="https://master-bry.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={touros}
              isBlog={false}
              title="TOUR OS"
              description="TOUR OS  project for different tour activities operations like creating bookings of different tour packages, different payment methods, and many more."
              ghLink="#"
              demoLink="#"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourExplorer}
              isBlog={false}
              title="TourExplorer"
              description="A  project for different tour activities operations like creating bookings of different tour packages, different payment methods, and many more."
              ghLink="#"
              demoLink="#"
            />
          </Col>

      </Row>
      </Container>
    </Container>
  );
}

export default Projects;