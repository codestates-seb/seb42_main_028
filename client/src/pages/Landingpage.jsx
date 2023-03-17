import React from 'react';
import landinglogo from '../assets/landinglogo.png';
import main from '../assets/main.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const LandingImg = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	cursor: pointer;
`;

// const LogoImg = styled.img`
//  width: 440px;
//  height: 360px;
//  position: absolute;
//  display: flex;
//  margin-top: 200px;
//  margin-left: 480px;
//  cursor: pointer;
// `;

const LogoImg = styled.img`
	max-width: 40%;
	height: 30%;
	position: absolute;
	display: flex;
	cursor: pointer;
	margin-top: 160px;
`;

const Text = styled.div`
	display: flex;
	justify-content: center;
`;

const Landingpage = () => {
	const navigate = useNavigate();

	const timeout = () => {
		setTimeout(() => {
			navigate('/main');
		}, 1000);
	};

	useEffect(() => {
		timeout();
		return () => {
			clearTimeout(timeout);
		};
	});

	return (
		<>
			<LandingImg onClick={() => navigate('/main')} src={main} />
			<Text>
				<LogoImg onClick={() => navigate('/main')} src={landinglogo} />
			</Text>
		</>
	);
};

export default Landingpage;
