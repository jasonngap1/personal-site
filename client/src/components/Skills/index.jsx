import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from './styles.css'
import skillsDetails from './details'
import SkillsPanel from './SkillsPanel'

function SkillsAttained() {
  
  return (
    <Container fluid className={styles.main}>
      <Row className={styles.title}>
        Skills Attained
      </Row>
      {skillsDetails.map(item => (<SkillsPanel
        image_left={item[0].image}
        title_left={item[0].title}
        list_left={item[0].list}
        image_right={item[1].image}
        title_right={item[1].title}
        list_right={item[1].list}
      />))}
    </Container>
  );
}

export default SkillsAttained;
