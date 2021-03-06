module.exports = {
	siteMetadata: {
		title: 'Pedro Ferrari Web Developer',
		description: 'Website Description'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'img',
				path: `${__dirname}/src/images/`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp'
	]
};
