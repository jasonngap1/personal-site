import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.css'

function WorkPanel(props) {
	return (
		<Row>
			<Col xs={2}>
				<img src={`/images/work-exp/${props.image}`} alt="work-experience.png"/>
			</Col>
			<Col xs={4}>
				<p>{props.title}</p>
				<p>{props.company}</p>
				<p>{props.duration}</p>
			</Col>
			<Col xs={6}>
				<ul>

				</ul>
			</Col>
		</Row>
	);
}

export default WorkPanel