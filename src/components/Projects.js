import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import carelife from "../assets/img/carelife.png";
import projImg4 from "../assets/img/project-img4.png";
import motopay from "../assets/img/motopay.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Afo-Cyber Sec",
      description: "Cyber Security Website",
      imgUrl: projImg2,
      link:"https://www.afocybersec.com"

    },
    {
      title: "Motopay",
      description: "Payment Web Application",
      imgUrl: motopay,
      link:"https://web-app.staging-api.motopayng.com"
    },

    {
      title: "Skill2Rural",
      description: "Learning Web Application",
      imgUrl: projImg4,
      link:"https://skill2rural.org/"
    },
    {
      title: "Skill2Rural Admin",
      description: "Admin Portal",
      imgUrl: projImg1,
      link:"https://admin.skill2rural.org/"
    },
    {
      title: "Carelife Foundation",
      description: "Healthcare Website",
      imgUrl: carelife,
      link:"https://carelife-foundation.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I’ve worked on, showcasing my expertise in frontend development using React, TailwindCSS, and interactive UI/UX design. Each project is built with performance, scalability, and modern web technologies in mind.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
