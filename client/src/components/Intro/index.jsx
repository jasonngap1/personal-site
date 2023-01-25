import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.css'

function Intro() {
  return (
    <Container fluid className={styles.main}>
      <Row className={styles.title}>
        About Me
      </Row>
      <Row className={styles.text}>
        <Col xs={4} className={styles.introPicCon}>
          <img src="/images/intro-pic.jpg" alt="dp-pic" className={styles.introPic}></img>
        </Col>
        <Col className={styles.innerText}>
          <Row>
            Welcome everyone to my very own personal website! This website will be used to record down my life journey, skills and personal projects I’ve done and I would definitely appreciate any feedback you may have!
          </Row>
          <br></br>
          <Row>
            You can say I’m a:
          </Row>
          <Row>
            <ul>
              <li>A big travel foodie: from baking, to cooking, to eating, I love them all! Finding hidden spots and traveling for food really makes my day!</li>
              <li>An avid learner: I am always hungry for more knowledge and I always try to set aside at least 30 mins a day learning something tech-related!</li>
              <li>Love problem-solving: I will try to finding different problems that I can identify and create personal projects out of them!</li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
