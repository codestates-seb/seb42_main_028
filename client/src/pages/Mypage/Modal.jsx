import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.2);
	z-index: 9999;
`;

const ModalWrap = styled.div`
	width: 480px;
	height: fit-content;
	border-radius: 15px;
	background-color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
	float: right;
	width: 40px;
	height: 40px;
	margin: 20px;
	cursor: pointer;
	i {
		color: #f40909;
		font-size: 30px;
	}
`;
//모달창
const Contents = styled.div`
	margin: 50px 30px;

	h1 {
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 60px;
		/* gap: 12px 32px; */
	}
`;

const Button = styled.button`
	margin-left: 200px;
	/* gap: 120px 32px; */
`;

const Button1 = styled.button`
	margin-right: 20px;
	font-size: 14px;
	padding: 10px 20px;
	border: none;
	background-color: white;
	border-radius: 10px;
	color: black;
	border: 1px solid black;

	font-weight: 800;
	cursor: pointer;

	&:hover {
		background-color: #898989;
	}
`;

const Button2 = styled.button`
	font-size: 14px;
	padding: 10px 20px;
	border: none;
	background-color: blue;
	border-radius: 10px;
	color: white;

	font-weight: 800;
	cursor: pointer;

	&:hover {
		background-color: #898989;
	}
`;

function Modal({ onClose }) {
	const handleClose = () => {
		onClose?.();
	};

	const [inputs, setInputs] = useState({
		originPassword: '',
		newPassword: '',
	});

	// 비밀번호 수정 요청
	const submitPassword = async () => {
		try {
			return await axios
				.patch(`${process.env.REACT_APP_SERVER_URL}/users/${5}`, {
					originPassword: inputs.originPassword,
					password: inputs.newPassword,
				})
				.then((res) => {
					if (res) {
						setInputs({ originPassword: '', newPassword: '' });
						alert('비밀번호가 변경되었습니다');
					} else {
						alert('비밀번호를 확인해주세요');
					}
				});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Overlay>
			<ModalWrap>
				<CloseButton onClick={handleClose}></CloseButton>
				<Contents>
					<h1>수정사항을 저장 하시겠습니까?</h1>
					<Button>
						<Button1 onClick={handleClose}>취소</Button1>
						<Button2 onClick={submitPassword}>확인</Button2>
					</Button>
				</Contents>
			</ModalWrap>
		</Overlay>
	);
}

export default Modal;
