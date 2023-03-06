import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.css'
import Image from 'react-bootstrap/Image'

function SkillsPanel(props) {
	return (
		<Row className={styles.companyCon} >
			<Col>
				<Image fluid roundedCircle src={`/images/skills/${props.image_left}.png`} alt="skills.png" />
			</Col>
			<Col>
				<Row>
					<p>{props.title_left}</p>
				</Row>
				<Row>
					<ul>
						{props.list_left.map((item, i) => <li key={i}>{item}</li>)}
					</ul>
				</Row>
			</Col>
			<Col></Col>
			<Col>
				<Image fluid roundedCircle src={`/images/skills/${props.image_right}.png`} alt="skills.png" />
			</Col>
			<Col>
				<Row>
					<p>{props.title_right}</p>
				</Row>
				<Row>
					<ul>
						{props.list_right.map((item, i) => <li key={i}>{item}</li>)}
					</ul>					
				</Row>
			</Col>			
		</Row>
	);
}

export default SkillsPanel