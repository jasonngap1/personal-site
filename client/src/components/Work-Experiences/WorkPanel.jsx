import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.css'

function WorkPanel(props) {
	return (
		<Row className={styles.companyCon} >
			<Col xs={2}>
				<img src={`/images/work-exp/${props.image}.png`} alt="work-experience.png" className={styles.companyPic} />
			</Col>
			<Col xs={4}>
				<p>{props.title}</p>
				<p>{props.company}</p>
				<p>{props.duration}</p>
			</Col>
			<Col xs={6}>
				<ul>
					{props.list.map((item, i) => <li key={i} className={styles.companyDetails}>{item}</li>)}
				</ul>
			</Col>
		</Row>
	);
}

export default WorkPanel