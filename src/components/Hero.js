import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import { isMobileOnly } from 'react-device-detect'

// import hex2rgba from '../utils/hex2rgba'

import Link from './Link'

// import colors from '../styles/_variables.module.scss'
import bg from '../images/moretti-hero.jpg'

const styles = {
	hero: {
		background: `url(${bg}) no-repeat fixed center / cover`,
		position: 'relative',
	},
	jumbo: {
		background: 'transparent',
		height: '100vh',
	},
	cta: {
		fontSize: '1rem',
	},
	scroll: {
		bottom: 0,
		cursor: 'pointer',
		left: 0,
		margin: '0 auto',
		position: 'absolute',
		right: 0,
		width: '35px',
	},
}

const Hero = () => {
	return (
		<section className="hero" style={styles.hero} id="inicio">
			<Jumbotron
				fluid
				style={styles.jumbo}
				className={`m-0 d-flex justify-content-center align-items-center flex-column`}
			>
				<Container className={`d-flex flex-column align-items-start`}>
					<h2 className={`hero-text h1 text-primary text-uppercase`}>
						<span className="text-secondary">
							<strong>Protegemos </strong>
						</span>
						<br />
						lo importante de su vida
					</h2>
					{isMobileOnly ? (
						<Button
							href="/#contacto"
							variant="brand"
							className="mt-5 mx-auto d-inline-flex align-items-center"
						>
							<i className="ri-chat-3-line mr-2"></i>
							<span>Asesorate</span>
						</Button>
					) : (
						<Button
							href="/#nosotros"
							variant="brand"
							className="mt-5"
							size="lg"
						>
							<span className="text-uppercase" style={styles.cta}>
								Conocenos
							</span>
						</Button>
					)}
				</Container>
				<Link
					to={`/#nosotros`}
					className={`scroll text-white h2`}
					style={styles.scroll}
				>
					<i
						className="ri-arrow-down-line d-flex justify-content-center"
						style={styles.scroll}
					></i>
				</Link>
			</Jumbotron>
		</section>
	)
}

export default Hero
