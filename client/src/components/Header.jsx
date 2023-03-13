import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import search from '../assets/search.png';
import profile from '../assets/profile.png';

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
	cursor: pointer;
`;

const SearchWrap = styled.div`
	position: relative;
	width: 656px;
	height: 32.5px;
	margin-left: 420px;
	margin-top: -48px;
`;

const SearchBox = styled.input`
	width: 696px;
	height: 42px;
	padding-left: 40px;
	border-radius: 10px;
	border: 1px solid #d9d9d9;
`;

const SearchImg = styled.img`
	position: absolute;
	width: 24px;
	left: 12px;
	top: 12px;
`;

const LoginLogoutButton = styled.a`
	width: 78px;
	height: 33px;
	color: #000000;
	background-color: #fff;
	font-size: 13px;
	border: 1px solid #fff;
	border-radius: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	margin-top: -24px;
	margin-left: 85%;
`;

const SignUpButton = styled.a`
	width: 78px;
	height: 33px;
	color: white;
	background-color: #fd8e0d;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	border: 1px solid rgb(255, 255, 255, 0);
	font-size: 13px;
	position: relative;
	margin-left: 90%;
	margin-top: -36px;
	margin-bottom: 32px;
	cursor: pointer;
`;

const UserInfo = styled.img`
	width: 38px;
	height: 38px;
	margin-top: -50px;
	margin-bottom: 12px;
	margin-left: 1320px;
	cursor: pointer;
`;

const Header = () => {
	const location = useLocation().pathname;
	const navigate = useNavigate();

	if (location === '/') return null;

	return (
		<>
			<HeaderWrap>
				<LogoImg onClick={() => navigate('/')} src={logo} />
				<SearchWrap>
					<SearchBox />
					<SearchImg src={search} />
				</SearchWrap>
				<LoginLogoutButton onClick={() => navigate('/login')}>
					로그인
				</LoginLogoutButton>
				<SignUpButton onClick={() => navigate('/signup')}>
					회원가입
				</SignUpButton>
			</HeaderWrap>
		</>
		// <>
		// 	<HeaderWrap>
		// 		<LogoImg onClick={() => navigate('/')} src={logo} />
		// 		<SearchWrap>
		// 			<SearchBox />
		// 			<SearchImg src={search} />
		// 		</SearchWrap>
		// 		<LoginLogoutButton onClick={() => navigate('/main')}>
		// 			로그아웃
		// 		</LoginLogoutButton>
		// 		<UserInfo onClick={() => navigate('/mypage')} src={profile}></UserInfo>
		// 	</HeaderWrap>
		// </>
	);
};

export default Header;
