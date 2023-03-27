import React from 'react';
import styled from 'styled-components';
import defaultimg from '../assets/defaultimg.png';
import food from '../assets/food.png';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Fitst = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #fd8e0d;
`;

const Second = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #fd8e0d;
`;

const Imgon = styled.div`
	display: flex;
`;
// const Imgon2 = styled.div`
// 	width: 80px;
// 	height: 50px;
// 	text-align: center;
// 	background-color: gray;
// `;

const Imgoff = styled.div`
	display: flex;
`;
// const Imgon3 = styled.div`
// 	width: 80px;
// 	height: 50px;
// 	text-align: center;
// 	background-color: gray;
// `;
const TitleContainer = styled.div`
	width: 500px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 24px;
	font-size: 12px;
	padding-left: 12px;
`;

const TitleContainer2 = styled.div`
	width: 500px;
	height: 100px;
	display: flex;
	flex-direction: column;
	padding-top: 24px;
	font-size: 12px;
	padding-left: 12px;
`;

const Title = styled.div`
	font-weight: bold;
`;

const Content = styled.div`
	height: 60px;
	padding-top: 4px;
`;

const Title2 = styled.div`
	font-weight: bold;
`;

const Content2 = styled.div`
	padding-top: 4px;
`;

const Img1 = styled.img`
	width: 80px;
	height: 60px;
	&:hover {
		cursor: pointer;
		filter: brightness(0.7);
	}
`;

const Img2 = styled.img`
	width: 80px;
	height: 60px;
	&:hover {
		cursor: pointer;
		filter: brightness(0.7);
	}
`;

const Mywrite = () => {
	return (
		<>
			<Container>
				<Fitst>
					<Imgon>
						<Img1 src={food}></Img1>
						{/* <Imgon2>사진이 있는 경우</Imgon2> */}
					</Imgon>
					<TitleContainer>
						<Title>글 제목입니다!!</Title>
						<Content>일본 오사카에서 먹는 카메스시가 제일 맛있습니다</Content>
					</TitleContainer>
				</Fitst>
				<Second>
					<Imgoff>
						<Img2 src={defaultimg}></Img2>
						{/* <Imgon3>기본 이미지</Imgon3> */}
					</Imgoff>
					<TitleContainer2>
						<Title2>글 제목입니다!!</Title2>
						<Content2>일본 오사카에서 먹는 카메스시가 제일 맛있습니다</Content2>
					</TitleContainer2>
				</Second>
			</Container>
		</>
	);
};

export default Mywrite;
