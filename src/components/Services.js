import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Services = () => {
	const servicesList = [
		{
			title: 'Despidos',
			text: 'Si te despidieron, asesorate ahora.',
		},
		{
			title: 'Accidentes de Trabajo',
			text: 'Si padeciste un accidente de trabajo, asesorate ahora.',
		},
		{
			title: 'Enfermedades Laborales',
			text:
				'Si padeces de una enfermedad o dolencia que te ocasionó el trabajo, asesorate ahora',
		},
		{
			title: 'Accidentes de Tránsito',
			text:
				'Si fuiste víctima de un accidente de tránsito o chocaste con tu vehículo, asesorate ahora.',
		},
		{
			title: 'Trabajos en Negro',
			text: 'Si trabajas en negro, tenes derechos, asesorate ahora.',
		},
		{
			title: 'Empleadas Domésticas',
			text: 'Si te despidieron o queres conocer tus derechos, asesorate ahora.',
		},
		{
			title: 'Trabajadores de la Construcción',
			text: 'Si te despidieron o queres conocer tus derechos, asesorate ahora.',
		},
		{
			title: 'Consultas Legales',
			text: 'Contamos con diversos departamentos para atender a tu consulta legal.',
		},
	]

	return (
		<section className='services bg-light py-5' id='servicios'>
			<Container className='pb-4 my-4'>
				<h2 className='h1 text-primary text-center mt-2 py-2 text-uppercase'>
					Áreas de trabajo
				</h2>
				<p className='lead text-center text-primary mb-4'>
					Podemos ayudarte. Contanos que te pasó y te contactaremos a la brevedad.
				</p>
				<Row className='pb-4'>
					{servicesList.map((service, index) => (
						<Col sm={12} md={4} lg={3} className='my-3' key={index}>
							<Card className={`text-center bg-light h-100`}>
								<Card.Header className='bg-primary-grey py-4'>
									<Card.Title>
										<span className='h4 text-light'>{service.title}</span>
									</Card.Title>
								</Card.Header>
								<Card.Body className='bg-primary'>
									<Card.Text className='lead text-light'>{service.text}</Card.Text>
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
