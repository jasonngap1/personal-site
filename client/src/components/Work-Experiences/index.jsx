import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.css'
import workExpDetails from './details'
import WorkPanel from './WorkPanel'

console.log(workExpDetails);

function WorkExperiences() {
  
  return (
    <Container fluid className={styles.main}>
      <Row className={styles.title}>
        Work Experiences
      </Row>
      {workExpDetails.map(item => (<WorkPanel
        image={item.image}
        title={item.title}
        company={item.company}
        duration={item.duration}
        list={item.list}
      />))}
    </Container>
  );
}

export default WorkExperiences;
