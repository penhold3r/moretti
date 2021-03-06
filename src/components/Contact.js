import React, { useState } from 'react'
import { Container, Card, Row, Col, ListGroup, Form, InputGroup, Button } from 'react-bootstrap'
import qs from 'qs'
import axios from 'axios'

import ContactModal from './ContactModal'
import Link from './Link'

// const cors = 'https://cors-anywhere.herokuapp.com/'

const formConfig = {
	url: 'https://morettiasesores.com/contact-form/index.php',
	dest: 'morettihr@gmail.com',
}

const Contact = () => {
	const [validated, setValidated] = useState(false)
	const [modal, setModal] = useState(false)
	const [modalStatus, setModalStatus] = useState('')
	const [data, setData] = useState({ name: '', email: '', message: '' })
	const [modalTexts, setModalTexts] = useState({ title: '', text: '' })

	const handleChange = e => {
		const { name, value } = e.target

		setData({ ...data, [name]: value })
	}

	const handleSubmit = e => {
		const form = e.currentTarget

		e.preventDefault()
		e.stopPropagation()

		setValidated(true)

		if (form.checkValidity()) {
			const { url, dest } = formConfig

			setModal(true)
			setModalTexts({
				title: 'Enviado...',
				text: `${data.name}, estamos preparando tu mensaje.`,
			})
			setModalStatus('sending')

			axios({
				method: 'post',
				url,
				data: qs.stringify({
					...data,
					dest,
				}),
				headers: {
					'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
				},
			})
				.then(resp => {
					setModalTexts({
						title: '¡Mensaje Enviado!',
						text: `${data.name}, gracias por comunicarte con nosotros, te responderemos a la brevedad.`,
					})
					setModalStatus('success')
					console.log(resp)
				})
				.catch(err => {
					setModalTexts({
						title: '¡Hubo un error!',
						text: `${data.name}, algo parece haber salido mal, intenta de nuevo más tarde.`,
					})
					setModalStatus('error')
					console.error(err)
				})

			setValidated(false)
			setData({ name: '', email: '', message: '' })
		}
	}

	return (
		<section className={`section bg-white py-5`} id='contacto'>
			<ContactModal
				show={modal}
				onHide={() => setModal(false)}
				status={modalStatus}
				title={modalTexts.title}
				text={modalTexts.text}
			/>
			<Container className='py-5'>
				<Card className='border-0 pt-3 px-3 p-md-3'>
					<Card.Body className='mb-md-4 p-0'>
						<h2 className='h1 p-0 p-md-3 text-secondary'>Contacto</h2>
						<Row>
							<Col sm={12} md={6}>
								<ListGroup className='bg-transparent mb-4 mb-md-0' variant='flush'>
									<ListGroup.Item className='d-flex align-items-center bg-transparent px-0 px-md-3'>
										<i className='h3 text-secondary mb-0 mr-3 ri-home-2-line'></i>
										<div className='d-flex flex-column'>
											<Link to='https://goo.gl/maps/oo4bY4JYktStKt3n8' className={`text-primary`}>
												- Viamonte 5200 esquina Larrea local 5. Complejo Los Pinos, Chacras de
												Coria, Luján, Mendoza.
											</Link>
											<Link to='https://goo.gl/maps/tn5q1LWpBxramcX89' className={`text-primary`}>
												- Cayetano Silva 1331, Godoy Cruz, Mendoza.
											</Link>
										</div>
									</ListGroup.Item>
									<ListGroup.Item className='d-flex align-items-center bg-transparent px-0 px-md-3'>
										<i className='h3 text-secondary mb-0 mr-3 ri-whatsapp-line'></i>
										<div className='d-flex flex-column'>
											<Link
												to={`https://wa.me/5492615055165?text=${encodeURI(
													'Hola, necesito hacer una consulta.'
												)}`}
												className={`text-primary`}>
												261 505 5165
											</Link>
											<Link
												to={`https://wa.me/5492612616360995?text=${encodeURI(
													'Hola, necesito hacer una consulta.'
												)}`}
												className={`text-primary`}>
												261 636 0995
											</Link>
										</div>
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col sm={12} md={6} className='px-0 px-md-3'>
								<Form
									className={`bg-gradient rounded p-3 p-lg-4 shadow-sm`}
									noValidate
									validated={validated}
									onSubmit={handleSubmit}>
									<Form.Group controlId='name'>
										<Form.Label className='sr-only'>Nombre</Form.Label>
										<InputGroup>
											<InputGroup.Prepend className='border-0'>
												<InputGroup.Text
													id='inputGroupPrepend'
													className={`bg-light border-grey-100`}>
													<i className={`ri-account-circle-line text-primary-grey`}></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												className={`bg-white border-grey-100 text-dark rounded-right`}
												onChange={e => handleChange(e)}
												type='text'
												placeholder='Nombre y Apellido'
												name='name'
												value={data.name}
												required
											/>
											<Form.Control.Feedback>Completo!</Form.Control.Feedback>
											<Form.Control.Feedback type='invalid'>
												Por favor ingresa tu nombre
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className='text-light'>
											Por favor ingresa tu nombre completo.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='email'>
										<Form.Label className='sr-only'>Email</Form.Label>
										<InputGroup>
											<InputGroup.Prepend className='border-0'>
												<InputGroup.Text
													id='inputGroupPrepend'
													className={`bg-light border-grey-100`}>
													<i className={`ri-at-line text-primary-grey`}></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												className={`bg-white border-grey-100 text-dark rounded-right`}
												onChange={e => handleChange(e)}
												type='email'
												name='email'
												placeholder='nombre@email.com'
												value={data.email}
												required
											/>
											<Form.Control.Feedback>Completo!</Form.Control.Feedback>
											<Form.Control.Feedback type='invalid'>
												Por favor ingresa un correo válido.
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className='text-light'>
											No compartiremos tu dirección de correo con nadie.
										</Form.Text>
									</Form.Group>

									<Form.Group controlId='msg'>
										<Form.Label className='sr-only'>Mensaje</Form.Label>
										<InputGroup>
											<InputGroup.Prepend className='border-0'>
												<InputGroup.Text
													id='inputGroupPrepend'
													className={`bg-light border-grey-100`}>
													<i className={`ri-message-2-line text-primary-grey`}></i>
												</InputGroup.Text>
											</InputGroup.Prepend>
											<Form.Control
												className={`bg-white border-grey-100 text-dark rounded-right`}
												onChange={e => handleChange(e)}
												as='textarea'
												name='message'
												value={data.message}
												rows='4'
												placeholder='Tu mensaje...'
												required
											/>
											<Form.Control.Feedback>Completo!</Form.Control.Feedback>
											<Form.Control.Feedback type='invalid'>
												Por favor escribe un mensaje.
											</Form.Control.Feedback>
										</InputGroup>
										<Form.Text className='text-light'>Cuéntanos en que podemos ayudarte.</Form.Text>
									</Form.Group>

									<Form.Group controlId='formBasicCheckbox'>
										<Form.Check
											className='text-light'
											type='checkbox'
											label='No soy un robot'
											required
										/>
									</Form.Group>

									<Button
										className='d-flex w-100 w-md-auto w-lg-auto w-xl-auto justify-content-center align-items-center'
										variant={'outline-light'}
										type='submit'>
										<span className='mr-2'>Enviar</span>
										<i className='ri-mail-send-line'></i>
									</Button>
								</Form>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</section>
	)
}

export default Contact
