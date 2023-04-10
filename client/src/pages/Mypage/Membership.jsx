import React, { useState } from 'react';
import styled from 'styled-components';
import Modaldelect from './Modaldelect';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// async function getUser() {
// 	// async, await을 사용하는 경우
// 	try {
// 		// GET 요청은 params에 실어 보냄
// 		const response = await axios.get('/user', {
// 			params: {
// 				ID: 12345,
// 			},
// 		});

// 		// 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해주면 됨.

// 		await axios.get('/user?ID=12345'); // 위의 요청과 동일

// 		var userId = 12345;
// 		await axios.get(`/user?ID=${userId}`); // Backtick(`)을 이용해 이렇게 요청할 수도 있다.

// 		console.log(response);
// 	} catch (e) {
// 		// 실패 시 처리
// 		console.error(e);
// 	}
// }

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 24px 0 24px 0;
	width: 15%;
	height: 35px;
	background-color: #fd8e0d;
	color: #fff;
	font-size: 20px;
	font-weight: 600;
	border: 1px solid #fd8e0d;
	border-radius: 5px;
	box-shadow: inset 0 1px 0 0 #e4e4e4;
	&:hover {
		cursor: pointer;
	}
`;

//모달창
// const Contents = styled.div`
// 	margin: 50px 30px;

// 	h1 {
// 		font-size: 30px;
// 		font-weight: 600;
// 		margin-bottom: 60px;
// 		/* gap: 12px 32px; */
// 	}
// `;
// const CloseButton = styled.div`
// 	/* float: right;
// 	width: 40px;
// 	height: 40px;
// 	margin: 20px;
// 	cursor: pointer;
// 	i {
// 		color: #f40909;
// 		font-size: 30px;
// 	} */
// `;
// const Button1 = styled.button`
// 	margin-right: 20px;
// 	font-size: 14px;
// 	padding: 10px 20px;
// 	border: none;
// 	background-color: white;
// 	border-radius: 10px;
// 	color: black;
// 	border: 1px solid black;

// 	font-weight: 800;
// 	cursor: pointer;

// 	&:hover {
// 		background-color: #898989;
// 	}
// `;

// const Button2 = styled.button`
// 	font-size: 14px;
// 	padding: 10px 20px;
// 	border: none;
// 	background-color: blue;
// 	border-radius: 10px;
// 	color: white;

// 	font-weight: 800;
// 	cursor: pointer;

// 	&:hover {
// 		background-color: #898989;
// 	}
// `;

function Membership() {
	const [isOpen, setIsOpen] = useState(false);

	const onClickButton = () => {
		setIsOpen(true);
	};
	// const handleClose = () => {
	// 	onClose?.();
	// 	setIsOpen(true);
	// };
	// const navigate = useNavigate();

	return (
		<>
			<Button onClick={onClickButton}>탈퇴</Button>
			{/* <Modal>
				<h1>계정을 삭제 하시겠습니까?</h1>
				<Button>
					<Button onClick={() => navigate(-1)}>취소</Button>
					<Button onClick={onClickButton}>확인</Button>
				</Button>
			</Modal> */}
			{isOpen && (
				<Modaldelect
					open={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				/>
			)}
		</>
	);
}
export default Membership;
