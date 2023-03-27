import React, { useState } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import axios from 'axios';

const Input = styled.input`
	width: 60%;
	height: 40px;
	border: 1px solid #babbba;
	border-radius: 4px;
	padding-left: 8px;
	font-size: 20px;
`;

//변경 버튼
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

function Password() {
	// const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const onClickButton = () => {
		setIsOpen(true);
	};
	return (
		<>
			{' '}
			<Input />
			<Button onClick={onClickButton}>변경</Button>
			{isOpen && (
				<Modal
					open={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				/>
			)}
		</>
	);
}
export default Password;
