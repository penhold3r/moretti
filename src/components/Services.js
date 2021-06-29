import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

const Services = () => {
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

	return (
		<section className="services bg-light py-5" id="servicios">
			<Container className="pb-4 my-4">
				<h2 className="h1 text-primary text-center mt-2 py-2 text-uppercase">
					Áreas de trabajo
				</h2>
				<p className="lead text-center text-primary mb-4">Seguros</p>
				<Row className="pb-4">
					{servicesList.map((service, index) => (
						<Col sm={12} md={6} className="my-3" key={index}>
							<Card className={`text-center bg-light h-100`}>
								<Card.Header className="bg-primary-grey py-4">
									<Card.Title>
										<span className="h4 text-light">{service.title}</span>
									</Card.Title>
								</Card.Header>
								<Card.Body className="bg-primary p-0">
									<ListGroup variant="flush">
										{service.list.map(item => (
											<ListGroup.Item
												key={item}
												className="bg-transparent text-light"
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
