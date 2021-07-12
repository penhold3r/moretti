import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'

import img001 from '../images/moretti-image_001.jpg'
import img002 from '../images/moretti-image_002.jpg'
import img003 from '../images/moretti-image_003.jpg'

const styles = {
	imgs: {
		objectFit: 'cover',
		height: '300px',
		width: '100%',
	},
	about: {
		padding: isMobile ? '4rem 0' : '7rem 0',
	},
}

const About = () => (
	<section className="about bg-gradient section" id="nosotros">
		<Container fluid className="m-0">
			<Row>
				<Col className="bg-secondary p-0 m-0">
					<Image src={img001} style={styles.imgs} />
				</Col>
				<Col className="bg-secondary p-0 m-0">
					<Image src={img002} style={styles.imgs} />
				</Col>
				<Col className="bg-secondary p-0 m-0">
					<Image src={img003} style={styles.imgs} />
				</Col>
			</Row>
		</Container>
		<Container style={styles.about}>
			<h2 className="about-title h3 text-uppercase text-white text-center mt-4 mt-md-0">
				<strong>¿Quienes Somos?</strong>
			</h2>
			<p className="lead text-white text-center pt-2 pb-4">
				Somos una organización de productores asesores especializados en varias
				ramas del seguro, con más de 20 años de experiencia en la materia.
				Fieles a la palabra "Productor" y amantes de la palabra "Asesor".
			</p>
		</Container>
	</section>
)

export default About
