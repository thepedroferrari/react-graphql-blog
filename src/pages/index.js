import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
	<div>
		<h1>{data.site.siteMetadata.title}</h1>
		<p>PAPAPAPA</p>
		<p>Now go build something great.</p>
	</div>
);

export default IndexPage;

export const query = graphql`
	query siteMetadata {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
