import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

const styles = {
	header: {
		position: 'relative',
	},
}

const servicesList = [
	{
		title: 'Patrimoniales',
		list: [
			'Autos',
			'Casas',
			'Motos',
			'Comercios',
			'Praxis Médica',
			'Causiones',
		],
	},
	{
		title: 'Vida',
		list: [
			'Accidentes Personales',
			'Vida Obligatorios',
			'A.R.T.',
			'Vida Individual',
		],
	},
]

const Services = () => {
	return (
		<section className="services bg-gradient pb-5" id="servicios">
			<Container className="bg-secondary-gradient py-5" fluid>
				<h2 className="h1 text-light text-center mt-2 py-2 text-uppercase">
					<strong>Áreas de trabajo</strong>
				</h2>
				<p className="h2 text-center text-light m-0 text-uppercase">
					<strong>Seguros</strong>
				</p>
			</Container>
			<Container className="pb-4 my-4">
				<Row className="pb-4">
					{servicesList.map((service, index) => (
						<Col sm={12} md={6} className="my-3" key={index}>
							<Card className={`text-center border-0 rounded-0 h-100`}>
								<Card.Header className="border-0 rounded-0 bg-primary py-4">
									<Card.Title className="text-light text-uppercase m-0">
										<span className="h4">
											<strong>{service.title}</strong>
										</span>
									</Card.Title>
								</Card.Header>
								<Card.Body className="bg-white p-0">
									<ListGroup variant="flush">
										{service.list.map(item => (
											<ListGroup.Item
												key={item}
												className="bg-transparent text-brand text-left text-uppercase"
											>
												{item}
											</ListGroup.Item>
										))}
									</ListGroup>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	)
}

export default Services
