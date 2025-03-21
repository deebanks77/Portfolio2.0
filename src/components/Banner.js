import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const yearsOfExperience = new Date().getFullYear() - 2021

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="intro">
                    {`Hi! I'm Bankole`}{" "}
                    <span className="txt-rotate">
                      <span >Frontend Engineer</span>
                    </span>
                  </h1>
                  <p>
                    I am a full stack JavaScript developer with a passion for
                    crafting high-quality web applications. With {yearsOfExperience} years of
                    experience in the industry, I have developed a deep
                    understanding of the technologies and tools required to
                    build robust, scalable, and responsive web applications.
                    From front-end development using React, to back-end
                    programming with Node.js and MongoDB, I pride myself on my
                    ability to work across the entire stack and deliver
                    end-to-end solutions that meet the needs of my clients.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    <a
                      href="#connect"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Let’s Connect <ArrowRightCircle size={25} />
                    </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
