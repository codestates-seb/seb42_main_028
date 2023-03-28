import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import logo from '../../assets/logo.png';
import google from '../../assets/google.png';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

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
	flex-wrap: wrap;
	width: 100%;
	margin-top: 4px;
`;

const LoginLabel = styled.div`
	font-weight: 400;
	font-size: small;
`;

// const LoginInput = styled.input`
// 	width: 100%;
// 	height: 36px;
// 	border: 1px solid #babbba;
// 	border-radius: 4px;
// `;

const LoginnameInput = styled.input`
	width: 100%;
	height: 36px;
	border: ${({ isNameError }) =>
		isNameError ? '1px solid #d0393e' : '1px solid rgb(186, 191, 196)'};
	border-radius: 4px;
	font-size: 10px;
	padding-left: 8px;
`;

const LgoinEmailInput = styled.input`
	width: 100%;
	height: 36px;
	border: ${({ isEmailError }) =>
		isEmailError ? '1px solid #d0393e' : '1px solid rgb(186, 191, 196)'};
	border-radius: 4px;
	font-size: 10px;
	padding-left: 8px;
`;

const LoginPwInput = styled.input`
	width: 100%;
	height: 36px;
	border: ${({ isPwError }) =>
		isPwError ? '1px solid #d0393e' : '1px solid rgb(186, 191, 196)'};
	border-radius: 4px;
	font-size: 10px;
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

const Error = styled.div`
	color: #d0393e;
	font-size: 12px;
	margin-bottom: 8px;
	width: 240px;
`;

const Message = styled.div`
	font-size: 12px;
	margin-top: 4px;
`;

const Signuppage = () => {
	const navigate = useNavigate();

	const [userName, setName] = useState('');
	const [isNameError, setIsNameError] = useState(false);
	const [namelErrorMessage, setnameErrorMessage] = useState('');
	const [nameState, setNameState] = useState(false);

	const [email, setEmail] = useState('');
	const [isEmailError, setIsEmailError] = useState(false);
	const [emailErrorMessage, setEmailErrorMessage] = useState('');
	const [emailState, setEmailState] = useState(false);

	const [password, setPassword] = useState('');
	const [isPwError, setIsPwError] = useState(false);
	const [pwErrorMessage, setPwErrorMessage] = useState('');
	const [pwState, setPwState] = useState(false);

	const [isInputEmpty, setIsInputEmpty] = useState(false);

	const nameHandler = (e) => {
		setName(e.target.value);
	};

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};
	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};

	useEffect(() => {
		if (userName === '') {
			setIsNameError(false);
		} else if (userName.match(/^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{1,5}$/)) {
			setIsNameError(false);
			setNameState(true);
		} else {
			setnameErrorMessage('올바르지 않은 이름입니다');
			setIsNameError(true);
			setNameState(false);
		}

		if (email === '') {
			setIsEmailError(false);
		} else if (
			email.match(
				/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
			)
		) {
			setIsEmailError(false);
			setEmailState(true);
		} else {
			setEmailErrorMessage('올바른 이메일 형식을 입력하세요');
			setIsEmailError(true);
			setEmailState(false);
		}

		if (password === '') {
			setIsPwError(false);
		} else if (password.length >= 8 && password.match(/[a-zA-Z]+[0-9]+/)) {
			setIsPwError(false);
			setPwState(true);
		} else if (!password.match(/[0-9]+/) && password.match(/[a-zA-z]+/)) {
			setPwErrorMessage('올바르지 않은 비밀번호입니다');
			setIsPwError(true);
			setPwState(false);
		} else if (password.match(/[0-9]+/) && !password.match(/[a-zA-z]+/)) {
			setPwErrorMessage('올바르지 않은 비밀번호입니다');
			setIsPwError(true);
			setPwState(false);
		} else if (password.length < 8) {
			setPwErrorMessage('8자 이상 입력해주세요');
			setIsPwError(true);
			setPwState(false);
		}
	}, [userName, email, password]);

	// const signupHandler = async () => {
	// 	if (
	// 		!email ||
	// 		!userName ||
	// 		!password ||
	// 		namelErrorMessage ||
	// 		emailErrorMessage ||
	// 		pwErrorMessage
	// 	) {
	// 		console.log('회원가입 실패', '빈 칸이 없어야 합니다.', 'error');
	// 	} else {
	// 		try {
	// 			await axios
	// 				.post(`${process.env.REACT_APP_API_URL}/users/signup`, {
	// 					email: email,
	// 					userName: userName,
	// 					password: password,
	// 				})
	// 				.then(navigate('/login'));
	// 		} catch (error) {
	// 			alert(error);
	// 		}
	// 	}
	// };

	const data = {
		email: email,
		password: password,
		userName: userName,
		roles: 'USER',
	};

	const postSignupData = () => {
		const headers = {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		};

		return axios.post(
			`${process.env.REACT_APP_SERVER_URL}/users/signup`,
			data,
			headers,
			{ withCredentials: true },
		);
	};

	const createMemberOnSuccess = () => {
		window.alert('회원가입이 성공적으로 완료되었습니다!');
		navigate('/login');
	};

	const createMemberOnError = () => {
		window.alert('일시적인 오류입니다. 잠시 후에 다시 시도해주세요.');
	};

	const { mutate: createMember } = useMutation({
		mutationKey: ['postSignupData'],
		mutationFn: postSignupData,
		onSuccess: createMemberOnSuccess,
		onError: createMemberOnError,
	});

	const signupHandler = () => {
		if (!userName || !email || !password) {
			setIsInputEmpty(true);
			return;
		}
		createMember();
	};

	return (
		<>
			<Container>
				<Logoimg src={logo} />
				<SocialLoginContainer>
					<GoogleLogin>
						<SocialLoginIcon src={google} />
						<SocialLoginText>Google 로그인</SocialLoginText>
					</GoogleLogin>
				</SocialLoginContainer>
				<LoginFormContainer>
					<LoginForm>
						<LoginInputContainer>
							<LoginLabel>이름</LoginLabel>
							<LoginInputInnerContainer>
								<LoginnameInput
									onChange={nameHandler}
									placeholder='5글자 이하로 입력해주세요'
									isNameError={isNameError}
								/>

								<Message>
									{isNameError ? <Error>{namelErrorMessage}</Error> : null}
								</Message>
							</LoginInputInnerContainer>
						</LoginInputContainer>
						<LoginInputContainer>
							<LoginLabel>이메일</LoginLabel>
							<LoginInputInnerContainer>
								<LgoinEmailInput
									onChange={emailHandler}
									isEmailError={isEmailError}
									placeholder='이메일을 입력해주세요'
								/>
								<Message>
									{isEmailError ? <Error>{emailErrorMessage}</Error> : null}
								</Message>
							</LoginInputInnerContainer>
						</LoginInputContainer>
						<LoginInputContainer>
							<LoginLabel>비밀번호</LoginLabel>
							<LoginInputInnerContainer>
								<LoginPwInput
									type='password'
									onChange={passwordHandler}
									isPwError={isPwError}
									placeholder='영문, 숫자 포함 8자리 이상 입력해주세요'
								/>
								<Message>
									{isPwError ? <Error>{pwErrorMessage}</Error> : null}
								</Message>
							</LoginInputInnerContainer>
						</LoginInputContainer>
						<LoginButton onClick={signupHandler}>회원가입</LoginButton>
					</LoginForm>
					<Text>
						회원이신가요? &nbsp;
						<Linker
							onClick={() => {
								navigate('/signup');
							}}
						>
							로그인
						</Linker>
					</Text>
				</LoginFormContainer>
			</Container>
		</>
	);
};

export default Signuppage;
