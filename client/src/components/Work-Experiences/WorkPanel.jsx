import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles.css'
import Image from 'react-bootstrap/Image'

function WorkPanel(props) {
	return (
		<Row className={styles.companyCon} >
			<Col className={styles.companyPicCon} xs={2}>
				<Image fluid roundedCircle src={`/images/work-exp/${props.image}.png`} alt="work-experience.png" className={styles.companyPic} />
			</Col>
			<Col xs={4}>
				<p className={styles.companyIntro}>{props.title}</p>
				<p className={styles.companyIntro}>{props.company}</p>
				<p className={styles.companyIntro}>{props.duration}</p>
			</Col>
			<Col xs={6}>
				<ul className={styles.companyUl}>
					{props.list.map((item, i) => <li key={i} className={styles.companyDetails}>{item}</li>)}
				</ul>
			</Col>
		</Row>
	);
}

export default WorkPanel