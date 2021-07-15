module.exports = {
	siteMetadata: {
		title: `Moretti Asesores`,
		description: `Moretti Asesores es una organización de productores asesores especializados en varias ramas del seguro, con más de 20 años de experiencia en la materia.`,
		siteUrl: 'https://morettiasesores.com',
		keywords:
			'seguro vida asaguradora art accidentes laboral praxis asesores asesoria',
		author: `Moretti Asesores`,
		socialMedia: [
			{
				name: 'Whatsapp',
				icon: 'ri-whatsapp-line',
				url: `https://wa.me/5492615055165?text=${encodeURI(
					'Hola, necesito hacer una consulta.'
				)}`,
			},
		],
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 6,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				offset: 80,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Moretti Seguros`,
				short_name: `Moretti`,
				start_url: `/`,
				background_color: `#FFFFFF`,
				theme_color: `#093A58`,
				display: `standalone`,
				icon: `src/images/favicon.png`,
			},
		},
		`gatsby-plugin-offline`,
	],
}
