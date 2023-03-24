import React, { useState } from 'react';
import styled from 'styled-components';
import Modaldelect from './Modal';
// import { useNavigate } from 'react-router-dom';

// const NavMembership = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	margin: 2.5rem auto 2.5rem auto;
// 	/* width:100%  */
// 	width: max-content;
// 	height: 35px;
// 	background-color: white;
// 	color: black;
// 	font-size: 1.2rem;
// 	font-weight: 600;
// 	border-radius: 5px;
// 	/* box-shadow: inset 0 1px 0 0 #e4e4e4; */
// 	&:hover {
// 		cursor: pointer;
// 	}
// `;

const Button = styled.button`
	margin-left: 200px;
	/* gap: 120px 32px; */
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
const CloseButton = styled.div`
	/* float: right;
	width: 40px;
	height: 40px;
	margin: 20px;
	cursor: pointer;
	i {
		color: #f40909;
		font-size: 30px;
	} */
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

function Membership() {
	const [isOpen, setIsOpen] = useState(false);

	// const onClickButton = () => {
	// 	setIsOpen(true);
	// };
	// const handleClose = () => {
	// 	onClose?.();
	// 	// setIsOpen(true);

	// const navigate = useNavigate();

	return (
		<>
			{/* <Modal> */}
			{/* <CloseButton onClick={onClickButton}></CloseButton>

			{/* <h1>계정을 삭제 하시겠습니까?</h1>
			<Button>
				<Button1 onClick={() => navigate(-1)}>취소</Button1>
				<Button2 onClick={onClickButton}>확인</Button2>
			</Button>  */}

			{isOpen && (
				<Modaldelect
					open={isOpen}
					onClose={() => {
						setIsOpen(false);
					}}
				/>
			)}
			{/* </Modal> */}
		</>
	);
}
export default Membership;

// function Membership() {
// 	const [isOpen, setIsOpen] = useState(false);

// 	// const onClickNavMembership = () => {
// 	// 	setIsOpen(true);
// 	// };

// 	return (
// 		<>
// 			{/* <Input /> */}
// 			<NavMembership>
// 				{isOpen && (
// 					<Modal
// 						open={isOpen}
// 						onClose={() => {
// 							setIsOpen(false);
// 						}}
// 					/>
// 				)}
// 			</NavMembership>
// 		</>
// 	);
// }
// export default Membership;
