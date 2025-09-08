import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mb from "../../Assets/Projects/mb.png";
import bio from "../../Assets/Projects/bio.png";

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
              demoLink="https://master-bry.gitbio.vercel.app/"
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

      </Row>
      </Container>
    </Container>
  );
}

export default Projects;
