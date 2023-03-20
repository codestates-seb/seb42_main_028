import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import Button from '../../components/Button';
import profile from '../../assets/profile.png';

const Container = styled.div`
	display: flex;
	width: 500px;
    width:100% 
    width: max-content;
	padding: 1rem;
	margin: 136px auto 136px auto;
	border: 1px solid blue;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const ProfileImg = styled.img`
	width: 30%;
	/* height: auto; */
	display: flex;

	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 0.1rem;
	margin: 4px auto 4px auto;
	border: 1px solid red;
`;

const Name = styled.div`
	width: 100%;
	width: 500px;
	/* height: auto; */
	display: flex;
	width: max-content;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const NavBox = styled.div`
justify-content: center;
    align-items: center;
	width: 500px;
    width:100% 
    width: max-content;
	display: grid;
	margin: 2.5rem auto 2.5rem auto;
	padding: 0.2rem;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px 32px;
	
`;

const Nav = styled.div`
	display: grid;
	width:100% 
	margin: 2.5rem auto 2.5rem auto;
	padding: 0.8rem;
	/* grid-template-columns: repeat(4, 1fr); */
	gap: 12px 32px;
	/* align-items: center;
	text-align: center; */
`;

const ChangeName = styled.div`
	display: flex;
	padding-bottom: 1rem;
`;

const Input = styled.input`
	width: 100%;
	height: 36px;
	border: 1px solid #babbba;
	border-radius: 4px;
	padding-left: 8px;
`;

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	width: 15%;
	height: 35px;
	background-color: #fd8e0d;
	color: #fff;
	font-size: 1.2rem;
	font-weight: 600;
	border: 1px solid #fd8e0d;
	border-radius: 5px;
	box-shadow: inset 0 1px 0 0 #e4e4e4;

	&:hover {
		cursor: pointer;
	}
`;

function Mypage() {
	const navigate = useNavigate();
	return (
		<>
			{/* <profileButton name='sss' event>
				<profileImg onClick={() => navigate('/review')} src={profile} />
			</profileButton> */}

			<Container>
				{/* 파일업로드 부분 찾아서 
				<ProfileImg onClick={() => navigate('/review')} src={profile} /><ProfileImg onClick={() => navigate('/review')} src={profile} /> */}
				<ProfileImg src={profile} />
				<Name>김개똥</Name>
				<NavBox>
					<Nav>이름변경</Nav>
					<Nav>내가 쓴 글</Nav>
					<Nav>캘린더</Nav>
					<Nav>회원탈퇴</Nav>
				</NavBox>

				<ChangeName>이름</ChangeName>

				<Input />

				<Button
					onClick={() => {
						navigate('/mypage');
					}}
				>
					변경
				</Button>
			</Container>
		</>
	);
}
export default Mypage;
