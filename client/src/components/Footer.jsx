import React from 'react';
import styled from 'styled-components';
import footerlogo from '../assets/footerlogo.png';
import github from '../assets/github.png';
import youtube from '../assets/youtube.png';
import { useLocation } from 'react-router';

const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 170px;
	background-color: #e9e9e9;
	border-top: 1px solid #fd8e0d;
	justify-content: space-between;
	margin-top: 40px;
`;

const Left = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 200px;
	margin-bottom: 40px;
`;
const LeftOne = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 60px;
	margin-left: 44px;
	> div {
		font-size: 16px;
		margin-bottom: 15px;
		padding-top: 6px;
		font-weight: bold;
		margin-left: 10px;
	}
`;

const Logoimg = styled.img`
	width: 28px;
	height: 28px;
`;

const LeftTwo = styled.div`
	display: flex;
	justify-content: space-between;
	> div {
		font-size: 16px;
		margin-bottom: 12px;
		padding-top: 4px;
		margin-right: 22px;
	}
`;

const Logoimgone = styled.img`
	width: 28px;
	height: 28px;
	margin-left: 44px;
`;

const LeftLast = styled.div`
	display: flex;
	justify-content: space-between;
	> div {
		font-size: 16px;
		margin-bottom: 12px;
		margin-right: 12px;
		margin-top: 8px;
	}
`;

const Logoimgtwo = styled.img`
	width: 28px;
	height: 28px;
	margin-left: 44px;
`;

const Right = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
	margin-right: 20px;
	margin-bottom: 10px;

	> .FE {
		margin-top: 20px;
		font-size: 12px;
		margin-right: 200px;
	}

	> .BE {
		font-size: 12px;
		margin-right: 166px;
		margin-bottom: 40px;
	}
`;

const Footer = () => {
	const location = useLocation().pathname;
	if (
		location === '/' ||
		location === '/login' ||
		location === '/signup' ||
		location === '/404'
	)
		return null;

	return (
		<Container>
			<Left>
				<LeftOne>
					<Logoimg src={footerlogo} alt=' ' />
					<div className='trip'>TEAM 여행의신</div>
				</LeftOne>
				<LeftTwo>
					<Logoimgone src={github} />
					<div className='git'>Repository</div>
				</LeftTwo>
				<LeftLast>
					<Logoimgtwo src={youtube} />
					<div className='youtube'>Demo Video</div>
				</LeftLast>
			</Left>
			<Right>
				&nbsp;
				<div className='FE'>Front-end: 김나영, 김지아, 임대훈</div>
				<div className='BE'>Back-end: 나국로, 백종민, 이두용, 황재성</div>{' '}
			</Right>
		</Container>
	);
};

export default Footer;
