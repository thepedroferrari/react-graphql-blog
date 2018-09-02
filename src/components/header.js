import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Logo from '../images/logo.svg';

const HeaderWrapper = styled.div`
	background: rebeccapurple;
	marginBottom: 1.45rem;
	h1 {
		margin: 0;
		img {
			height: 60px;
		}
	}
`;
const HeaderContainer = styled.div`
	margin: 0 auto;
	maxWidth: 960px;
	padding: 1.45rem 1.0875rem;
`;

const Header = () => (
	<HeaderWrapper>
		<HeaderContainer>
			<h1>
				<Link to="/">
					<img src={Logo} alt="Pedro Ferrari Logo" />
				</Link>
			</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Posts</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
		</HeaderContainer>
	</HeaderWrapper>
);

export default Header;
