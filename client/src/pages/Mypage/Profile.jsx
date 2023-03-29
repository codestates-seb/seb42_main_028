import React, { useState } from 'react';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.png';

const ProfileImg = styled.img`
	width: 30%;
	/* height: auto; */
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 4px auto 4px auto;
	/* border: 1px solid red; */
`;

function Profile() {
	// const [menu, setMenu] = useState('');

	const [fileImg] = useState();

	const saveFileImg = (e) => {
		//파일 저장
		URL.createObjectURL(e.target.files[0]);
	};

	return (
		<>
			{/* <ProfileImg src={profile} /> */}
			<ProfileImg>
				{fileImg && (
					<ProfileImg alt='simple' src={fileImg} style={{ margin: 'auto' }} />
				)}
				<input
					name='imgUpload'
					type='file'
					accept='image/*'
					onChange={saveFileImg}
				/>
			</ProfileImg>
		</>
	);
}
export default Profile;
