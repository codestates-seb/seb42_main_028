import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 90vh;
`;

const Button = styled.a`
	color: #000000;
	padding: 12px 12px;
	background-color: #fff;
	font-size: 13px;
	margin-right: 8px;
	border: 1px solid #787878;
	box-shadow: 0px 1px 1px 1px rgb(0, 0, 0, 0.2);
	border-radius: 15px;
	cursor: pointer;
	white-space: nowrap;

	&:hover {
		background-color: #fd8e0d;
		cursor: pointer;
		transition: 1s;
	}
`;

const BtnWrapper = styled.div`
	display: flex;
	margin-top: 24px;
`;

const Text = styled.div`
	font-size: 18px;
`;

const LogoImg = styled.img`
	width: 60%;
	max-width: 300px;
	height: auto;
	cursor: pointer;
	margin-bottom: 36px;
`;

const Errorpage = () => {
	const navigate = useNavigate();

	return (
		<>
			<Container>
				<LogoImg onClick={() => navigate('/')} src={logo} />
				<Text>"요청하신 페이지를 찾을 수 없습니다"</Text>
				<BtnWrapper>
					<Button onClick={() => navigate(-1)}>이전 페이지</Button>
					<Button onClick={() => navigate('/main')}>홈으로 이동</Button>
				</BtnWrapper>
			</Container>
		</>
	);
};

export default Errorpage;
