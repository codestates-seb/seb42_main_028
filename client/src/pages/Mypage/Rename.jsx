import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// import search from '../assets/search.png';
import profile from '../assets/profile.png';

const Button = styled.div``;

const ButtonImg = styled.img``;

// const profile = styled.img``;

function Rename() {
	const navigate = useNavigate();
	return (
		<>
			<Button event>
				<ButtonImg onClick={() => navigate('/mypage')} src={profile} />
			</Button>
		</>
	);
}

export default Rename;
