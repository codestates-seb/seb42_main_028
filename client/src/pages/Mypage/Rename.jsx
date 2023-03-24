import React, { useState } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const Input = styled.input`
	width: 100%;
	height: 36px;
	border: 1px solid #babbba;
	border-radius: 4px;
	padding-left: 8px;
`;

//변경 버튼
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

function Rename() {
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
export default Rename;
