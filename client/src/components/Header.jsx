import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import { useIsLoginStore } from '../store/loginstore';
import axios from 'axios';
import userStore from '../store/userStore';

const HeaderWrap = styled.div`
	top: 0;
	position: sticky;
	left: 0;
	width: 100%;
	height: 70px;
	box-shadow: 0 1px 2px 0 #fd8e0d;
	background-color: #fff;
	z-index: 100;
	display: flex;
	justify-content: center;
	padding: 8px;
`;

const Wrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	display: flex;
	min-width: 100px;
`;

const LogoImg = styled.img`
	width: 40%;
	max-width: 200px;
	height: auto;
	margin-top: 4px;
	cursor: pointer;
`;

const SearchWrap = styled.div`
	display: flex;
	max-width: 700px;
	width: 100%;
	min-width: 100px;
	border: 1px solid #d9d9d9;
	align-items: center;
	padding: 0px 8px;
	border-radius: 10px;
	margin: 0px 8px;
`;

const SearchBox = styled.input`
	height: 42px;
	width: 100%;
	border: none;
	outline: none;
`;

const SearchImg = styled.img`
	width: 24px;
	height: 24px;
`;

const LoginLogoutButton = styled.a`
	color: #000000;
	padding: 12px 12px;
	background-color: #fff;
	font-size: 13px;
	margin-right: 8px;
	border: 1px solid #787878;
	border-radius: 4px;
	cursor: pointer;
	white-space: nowrap;
`;

const SignUpButton = styled.a`
	color: white;
	white-space: nowrap;
	padding: 12px 12px;
	background-color: #fd8e0d;
	border-radius: 10px;
	border: 1px solid rgb(255, 255, 255, 0);
	font-size: 13px;
	cursor: pointer;
`;

const BtnWrapper = styled.div`
	display: flex;
`;

const UserInfo = styled.img`
	width: 38px;
	height: 38px;
	white-space: nowrap;
	cursor: pointer;
`;

const Header = () => {
	const location = useLocation().pathname;
	const navigate = useNavigate();
	const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
	const [userInfo, setUserInfo] = useState(null);
	// const isLogin = !!localStorage.getItem('token');
	const userInfoStorgae = JSON.parse(localStorage.getItem('userInfoStorage'));

	if (location === '/' || location === '/404') return null;

	const logoutHandler = () => {
		const accessToken = localStorage.getItem('accessToken');
		const refreshToken = localStorage.getItem('refreshToken');
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
			Refresh: refreshToken,
		};

		return axios
			.get(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, { headers })
			.finally((response) => {
				localStorage.clear();
				window.alert('로그아웃 되었습니다!');
				window.location.reload();
			});
	};

	// const fetchUserInfo = () => {
	// 	const userId = JSON.parse(localStorage.getItem('userInfoStorage')).userId;
	// 	return instance.get(`/users/${userId}`);
	// };

	// const fetchUserInfoOnSuccess = (res) => {
	// 	const data = res.data;
	// 	setUserInfo(data);
	// };

	// useQuery({
	// 	queryKey: ['fetchUserInfo', isLogin],
	// 	queryFn: fetchUserInfo,
	// 	enabled: isLogin,
	// 	onSuccess: fetchUserInfoOnSuccess,
	// 	refetchOnWindowFocus: false,
	// });

	return (
		<>
			{isLogin ? (
				<>
					<HeaderWrap>
						<Wrapper>
							<LogoImg onClick={() => navigate('/')} src={logo} />

							<SearchWrap>
								<SearchBox />
								<SearchImg src={search} />
							</SearchWrap>
							<BtnWrapper>
								<LoginLogoutButton onClick={logoutHandler}>
									로그아웃
								</LoginLogoutButton>
								<UserInfo
									onClick={() => navigate(`/mypage/${userInfoStorgae?.userId}`)}
									src={profile}
								></UserInfo>
							</BtnWrapper>
						</Wrapper>
					</HeaderWrap>
				</>
			) : (
				<>
					<HeaderWrap>
						<Wrapper>
							<LogoImg onClick={() => navigate('/')} src={logo} />
							<SearchWrap>
								<SearchBox />
								<SearchImg src={search} />
							</SearchWrap>
							<BtnWrapper>
								<LoginLogoutButton onClick={() => navigate('/login')}>
									로그인
								</LoginLogoutButton>
								<SignUpButton onClick={() => navigate('/signup')}>
									회원가입
								</SignUpButton>
							</BtnWrapper>
						</Wrapper>
					</HeaderWrap>
				</>
			)}
		</>
	);
};

export default Header;
