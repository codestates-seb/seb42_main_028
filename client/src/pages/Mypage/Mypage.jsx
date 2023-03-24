import React, { useState } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Rename from './Rename';
import Mywriting from './Mywriting';
import Calender from './Calender';
// import Membership from './Membership';
import profile from '../../assets/profile.png';
import Modaldelect from './Modaldelect';
// import axios from 'axios';
// import Button from '../../components/Button';

const Container = styled.div`
	display: flex;
	width: 540px;
	/* width:100% 
    width: max-content; */
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
	/* width: 100%; */
	width: 500px;
	/* height: auto; */
	display: flex;
	/* width: max-content; */
	justify-content: center;
	align-items: center;
	text-align: center;
`;
//이름변경버튼 4개 묶음
const NavBox = styled.div`
	justify-content: center;
	align-items: center;
	width: 516px;
	/* width:100% 
    width: max-content; */
	display: flex;
	margin: 2.5rem auto 2.5rem auto;
	padding: 0.2rem;
	grid-template-columns: repeat(4, 1fr);
	gap: 12px 32px;
`;

// 회원탈퇴, 이름변경 ...버튼
const NavButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2.5rem auto 2.5rem auto;
	/* width:100%  */
	width: max-content;
	height: 35px;
	background-color: white;
	color: black;
	font-size: 1.2rem;
	font-weight: 600;
	border-radius: 5px;
	/* box-shadow: inset 0 1px 0 0 #e4e4e4; */
	&:hover {
		cursor: pointer;
	}
`;

// const ChangeName = styled.div`
// 	display: flex;
// 	padding-bottom: 1rem;
// `;

// const Input = styled.input`
// 	width: 100%;
// 	height: 36px;
// 	border: 1px solid #babbba;
// 	border-radius: 4px;
// 	padding-left: 8px;
// `;

//변경 버튼
// async function getUser() {
// 	// async, await을 사용하는 경우
// 	try {
// 		// GET 요청은 params에 실어 보냄
// 		const response = await axios.get('/user', {
// 			params: {
// 				ID: 12345,
// 			},
// 		});

// 		// 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.

// 		await axios.get('/user?ID=12345'); // 위의 요청과 동일

// 		var userId = 12345;
// 		await axios.get(`/user?ID=${userId}`); // Backtick(`)을 이용해 이렇게 요청할 수도 있다.

// 		console.log(response);
// 	} catch (e) {
// 		// 실패 시 처리
// 		console.error(e);
// 	}
// }

function Mypage() {
	const [menu, setMenu] = useState('');
	// const navigate = useNavigate();
	// const [isOpen, setIsOpen] = useState(false);

	// const onClickButton = () => {
	// 	setIsOpen(true);
	// };

	return (
		<>
			{/* <profileButton name='sss' event>
				<profileImg onClick={() => navigate('/review')} src={profile} />
			</profileButton> */}

			<Container>
				{/* 파일업로드 부분 찾아서 
				<ProfileImg onClick={() => navigate('/review')} src={profile} /><ProfileImg onClick={() => navigate('/review')} src={profile} /> */}
				<ProfileImg src={profile} />
				<Name>김코딩</Name>
				<NavBox>
					{/* <NavButton onClick={onClickButton}>이름변경</NavButton> */}
					{/* {isOpen && (
						<Rename
							open={isOpen}
							onClose={() => {
								setIsOpen(false);
							}}
						/>
					)} */}

					<NavButton onClick={() => setMenu('비밀번호 수정')}>
						비밀번호 변경
					</NavButton>

					<NavButton onClick={() => setMenu('내가 쓴 글')}>
						내가 쓴 글
					</NavButton>

					<NavButton onClick={() => setMenu('달력')}>달력</NavButton>

					<NavButton onClick={() => setMenu('회원탈퇴')}>회원탈퇴</NavButton>
				</NavBox>

				{menu === '비밀번호 수정' && <Rename />}
				{menu === '내가 쓴 글' && <Mywriting />}
				{menu === '달력' && <Calender />}
				{menu === '회원탈퇴' && <Modaldelect />}

				{/* <ChangeName>이름</ChangeName> */}

				{/* <Input /> */}
				{/* <Button onClick={onClickButton}>변경</Button> */}
				{/* {isOpen && (
					<Modal
						open={isOpen}
						onClose={() => {
							setIsOpen(false); 
						}}
					/>
				)} */}
				{/* <Button
					onClick={() => {
						navigate('/mypage');
					}}
				>
					변경
				</Button> */}
			</Container>
		</>
	);
}
export default Mypage;
