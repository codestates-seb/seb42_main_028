import React from 'react';
import landinglogo from '../assets/landinglogo.png';
import main from '../assets/main.png';
import styled from 'styled-components';

const LogoImg = styled.img`
	width: 150;
`;

const LandingImg = styled.img`
	width: 100%;
`;

const Landingpage = () => {
	return (
		<>
			<LogoImg src={landinglogo} />
			<LandingImg src={main} />
		</>
	);
};

export default Landingpage;
