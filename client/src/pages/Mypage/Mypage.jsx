import React, { useState } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import Password from './Password';
import Mywriting from './Mywriting';
import Calender from './Calender';
import Membership from './Membership';
import Profile from './Profile';
import profile from '../../assets/profile.png';
// import axios from 'axios';

const Container = styled.div`
	display: flex;
	width: 540px;
	margin: 136px auto 136px auto;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	/* border: 1px solid blue; */
`;
const Box = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 4px auto 4px auto;
	border: 1px solid blue;
`;

const ProfileImg = styled.img`
	width: 180px;
	height: 180px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 4px auto 4px auto;
	border: 1px solid black;
`;

const ProfileButton = styled.div`
	width: 180px;
	height: 180px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 4px auto 4px auto;
	border: 1px solid red;
`;

const Name = styled.div`
	/* width: 100%; */
	width: 50px;
	/* height: auto; */
	display: flex;
	/* width: max-content; */
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 16px;
	border: 1px solid blue;
`;
//이름변경버튼 4개 묶음
const NavBox = styled.div`
	justify-content: center;
	align-items: center;
	width: 520px;
	/* width:100% 
    width: max-content; */
	display: flex;
	margin: 24px auto 28px auto;
	padding: 20px;
	grid-template-columns: repeat(4, 1fr);
	gap: 1200px 32px;
`;

// 회원탈퇴, 이름변경 ...버튼
const NavButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	margin: auto;
	width: max-content;
	height: 35px;
	background-color: white;
	color: black;
	font-size: 20px;
	font-weight: 600;
	border-radius: 5px;
	/* box-shadow: inset 0 1px 0 0 #e4e4e4; */
	&:hover {
		cursor: pointer;
	}
`;

function Mypage() {
	const [menu, setMenu] = useState('');

	// const [fileImg, setFileimg] = useState();

	// const saveFileImg = (e) => {
	// 	//파일 저장
	// 	setFileimg(URL.createObjectURL(e.target.files[0]));
	// };

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
			{/* <ProfileImg>
				{profileData && profileData.profile[0].address
					? profileData && profileData.profile[0].address
					: '없음'}
			</ProfileImg> */}
			<Container>
				{/* 안도면 이거 살려서 파일업로드 부분 찾아서 
				<ProfileImg onClick={() => navigate('/review')} src={profile} /><ProfileImg onClick={() => navigate('/review')} src={profile} /> */}

				{/* <ProfileImg
					onClick={() => src = { profile }}
				></ProfileImg> */}

				{/* <ProfileImg onClick={onClickProfileImg}>변경</ProfileImg> */}
				{/* <ProfileImgButton> */}
				<Box>
					<ProfileImg src={profile} />
					{/* </ProfileImgButton> */}

					{/* <ProfileImg
					onClick={() => setMenu('프로필 이미지 변경')}
					src={profile}
				/> */}

					<ProfileButton
						onClick={() => setMenu('프로필 이미지 변경')}
					></ProfileButton>
				</Box>
				<Name>김코딩</Name>
				<NavBox>
					<NavButton onClick={() => setMenu('비밀번호 수정')}>
						비밀번호 변경
					</NavButton>

					<NavButton onClick={() => setMenu('내가 쓴 글')}>
						내가 쓴 글
					</NavButton>

					<NavButton onClick={() => setMenu('달력')}>달력</NavButton>

					<NavButton onClick={() => setMenu('회원탈퇴')}>회원탈퇴</NavButton>
				</NavBox>
				{menu === '프로필 이미지 변경' && <Profile />}
				{menu === '비밀번호 수정' && <Password />}
				{menu === '내가 쓴 글' && <Mywriting />}
				{menu === '달력' && <Calender />}
				{menu === '회원탈퇴' && <Membership />}
			</Container>
		</>
	);
}
export default Mypage;
