import React from 'react';
import landinglogo from '../assets/landinglogo.png';
import main from '../assets/main.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const LandingImg = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	cursor: pointer;
`;

const LogoImg = styled.img`
	width: 440px;
	height: 360px;
	position: absolute;
	display: flex;
	margin-top: 200px;
	margin-left: 480px;
	cursor: pointer;
`;

const Landingpage = () => {
	const navigate = useNavigate();

	return (
		<>
			<LandingImg onClick={() => navigate('/main')} src={main} />
			<LogoImg onClick={() => navigate('/main')} src={landinglogo} />
		</>
	);
};

export default Landingpage;
