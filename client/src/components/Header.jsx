import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const HeaderWrap = styled.div`
	top: 0;
	position: fixed;
	left: 0;
	width: 100vw;
	height: 70px;
	box-shadow: 0 1px 2px 0 #fd8e0d;
	background-color: #fff;
	z-index: 100;
`;

const LogoImg = styled.img`
	width: 200px;
	margin-top: 4px;
	margin-left: 120px;
`;

const Header = () => {
	const navigate = useNavigate();

	return (
		<>
			<HeaderWrap>
				<LogoImg onClick={() => navigate('/')} src={logo} />
			</HeaderWrap>
		</>
	);
};

export default Header;
