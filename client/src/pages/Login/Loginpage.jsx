import logo from '../../assets/logo.png';
import google from '../../assets/google.png';
import styled from 'styled-components';

import { React, useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';
import { useIsLoginStore } from '../../store/loginstore';
import axios from 'axios';

const Logoimg = styled.img`
	width: 200px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto auto;
	margin-top: 136px;
`;

const SocialLoginContainer = styled.div`
	background-color: #ffffff;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	margin-top: 44px;
`;

const GoogleLogin = styled.a`
	width: 360px;
	margin-bottom: 1px;
	height: 36px;
	border: 1px solid #cccccc;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	padding: 3px;
	box-shadow: 0 0 2px 2px #e4e4e4;
	cursor: pointer;

	&:hover {
		background-color: #fff;
	}
`;

const SocialLoginIcon = styled.img`
	width: 25px;
	height: 25px;
	margin: 0;
`;

const SocialLoginText = styled.p`
	margin: 0;
	font-size: 15px;
	text-align: center;
	padding-top: 5px;
`;

const LoginFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: max-content;
	padding-top: 24px;
	padding-bottom: 50px;
`;

const LoginForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 8px;
	border: 1px solid #e4e4e4;
	width: 360px;
	height: max-content;
	background-color: white;
	box-shadow: 0 0 2px 2px #e4e4e4;
	padding: 40px 0 40px 0;
`;

const LoginInputContainer = styled.div`
	margin: 0 auto;
	margin-bottom: 32px;
	width: 80%;
	display: flex;
	flex-direction: column;
`;

const LoginInputInnerContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	width: 100%;
	margin-top: 4px;
`;

const LoginLabel = styled.div`
	font-weight: 400;
	font-size: small;
`;

const LoginInput = styled.input`
	width: 100%;
	height: 36px;
	border: 1px solid #babbba;
	border-radius: 4px;
	padding-left: 8px;
`;

const LoginButton = styled.button`
	margin-top: 20px;
	width: 80%;
	height: 35px;
	background-color: #fff;
	color: #fd8e0d;
	border: 1px solid #fd8e0d;
	border-radius: 5px;
	box-shadow: inset 0 1px 0 0 #e4e4e4;

	&:hover {
		cursor: pointer;
	}
`;

const Text = styled.p`
	font-size: 14px;
	margin-top: 30px;
`;

const Linker = styled.a`
	color: #fd8e0d;

	&:hover {
		cursor: pointer;
	}
`;

const Loginpage = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const [errorMessageContent, setErrorMessageContent] = useState();
	// const [checked, setChecked] = useState(false);
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const navigate = useNavigate();

	const { setIsLogin } = useIsLoginStore((state) => state);

	const data = { email: email, password: password };

	// const postLoginData = () => {
	// 	const headers = {
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Content-Type': 'application/json',
	// 	};

	// 	return axios.post(
	// 		`${process.env.REACT_APP_SERVER_URL}/auth/login`,
	// 		data,
	// 		headers,
	// 		{ withCredentials: true },
	// 	);
	// };

	// const postLoginData = async () => {
	// 	const headers = {
	// 		'Access-Control-Allow-Origin': '*',
	// 		'Content-Type': 'application/json',
	// 	};
	// 	try {
	// 		const result = await axios.post(
	// 			`${process.env.REACT_APP_SERVER_URL}/auth/login`,
	// 			data,
	// 			headers,
	// 			{ withCredentials: true },
	// 		);
	// 		console.log(result);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	const postLoginData = async () => {
		const headers = {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		};
		try {
			return await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/auth/login`,
				data,
				headers,
				{ withCredentials: true },
			);
		} catch (e) {
			console.log(e);
		}
	};

	const postLoginOnSuccess = (response) => {
		// localStorage.setItem('refreshToken', response.headers.get('Refresh'));
		// localStorage.setItem('accessToken', response.headers.get('Authorization'));
		// localStorage.setItem('userInfoStorage', JSON.stringify(response.data.data));

		// localStorage.setItem('accessToken', JSON.stringify(response.data.token));
		// localStorage.setItem('refreshToken', JSON.stringify(response.data.data));

		localStorage.setItem('token', response.headers.get('accesstoken'));
		localStorage.setItem('refreshToken', response.headers.get('refreshtoken'));
		localStorage.setItem('userInfoStorage', JSON.stringify(response.data.data));

		setIsLogin(true);
		navigate('/');

		console.log(response.headers.get('accesstoken'));
		console.log(response.headers.get('refreshtoken'));
	};

	const postLoginOnError = (err) => {
		if (err.response.status === 401) {
			setErrorMessageContent('이메일 또는 비밀번호를 다시 확인해주세요');
		}
	};

	const { mutate: postLogin } = useMutation({
		mutationKey: ['postLoginData'],
		mutationFn: postLoginData,
		onSuccess: postLoginOnSuccess,
		onError: postLoginOnError,
	});

	const loginHandler = () => {
		if (!email) {
			emailInputRef.current.focus();
			setErrorMessageContent('이메일을 입력해주세요');
			return;
		} else if (!password) {
			passwordInputRef.current.focus();
			setErrorMessageContent('비밀번호를 입력해주세요');
		} else {
			setErrorMessageContent('');
			postLogin();
		}
	};

	const EnterLogin = (e) => {
		if (e.key === 'Enter') {
			loginHandler();
		}
	};

	return (
		<>
			<Container>
				<Logoimg src={logo} />
				<SocialLoginContainer>
					<GoogleLogin href={`${process.env.REACT_APP_SERVER_URI}/`}>
						<SocialLoginIcon src={google} />
						<SocialLoginText>Google 로그인</SocialLoginText>
					</GoogleLogin>
				</SocialLoginContainer>
				<LoginFormContainer>
					<LoginForm>
						<LoginInputContainer>
							<LoginLabel>이메일</LoginLabel>
							<LoginInputInnerContainer>
								<LoginInput
									className='login-input'
									id='e-mail'
									onKeyPress={EnterLogin}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									placeholder='이메일'
									ref={emailInputRef}
									value={email || ''}
								/>
							</LoginInputInnerContainer>
						</LoginInputContainer>
						<LoginInputContainer>
							<LoginLabel>비밀번호</LoginLabel>
							<LoginInputInnerContainer>
								<LoginInput
									className='login-input'
									id='password'
									ref={passwordInputRef}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									onKeyPress={EnterLogin}
									placeholder='비밀번호'
									value={password || ''}
									type='password'
								/>
							</LoginInputInnerContainer>
						</LoginInputContainer>
						<LoginButton onClick={loginHandler}>로그인</LoginButton>
					</LoginForm>
					<Text>
						회원이 아닌신가요? &nbsp;
						<Linker
							onClick={() => {
								navigate('/signup');
							}}
						>
							회원가입
						</Linker>
					</Text>
				</LoginFormContainer>
			</Container>
		</>
	);
};

export default Loginpage;
