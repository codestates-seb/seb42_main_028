import React from 'react';
import landinglogo from '../assets/landinglogo.png';
import main from '../assets/main.png';
import styled from 'styled-components';

const LandingImg = styled.img`
	width: 100%;
	height: 100%;
	margin-top: 150px;
`;

const LogoImg = styled.img`
	width: 150;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Landingpage = () => {
	return (
		<>
			{/* <LogoImg src={landinglogo} /> */}
			<LandingImg src={main} />
		</>
	);
};

export default Landingpage;
