import React from 'react';
import ad from '../../assets/ad.png';
import { useNavigate } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../../components/Button';

//✭
const ContainerButton = styled.div`
	/* box-shadow: 0 1px 1px 0; */
	padding: 0.2rem 1rem;
	grid-template-columns: repeat(3, 1fr);
`;

//배너
const GroupButtonImg = styled.img`
	width: 125%;

	/* height: 1200%; */
`;
const GroupButton = styled.div`

	justify-content: center;
	align-items: center;
	display: flex;
	width: 1000px;
	width:100% 
	width: max-content;
	padding: 6rem;
	margin: 160px auto 80px auto;
	border: 1px solid white;

	color:red;
   font-size: 1.6rem;
   font-weight: 700;
   /* font-shadow:4px; */
   /* font-shadow: 0 4px 4px 0; */
  

   /* border-radius: 0.5rem; */
	/* max-width:1000px; */
	/* margin-left: 450px; */
	/* margin-right: 450px; */
`;

//3버튼
const AppBlock = styled.div`
	display: grid;
	width: 1000px;
	margin: 28px auto;
	margin-top: 28px;
	border: 1px solid black;
	padding: 1rem;
	grid-template-columns: repeat(3, 1fr);
	gap: 16px 32px;
	font-size: 1.2rem;
	/* box-shadow: 0 4px 4px 0; */
	/* border-left: 1px solid #000; 배너박스*/
	/* grid-template-rows: repeat(3, 1fr); */
	/* justify-content: space-between; */
	/* align-content: stretch; */
`;

function Mainpage() {
	const navigate = useNavigate();
	return (
		<ThemeProvider
			theme={{
				palette: {
					blue: '#228be6',
					gray: '#495057',
					pink: '#f06595',
				},
			}}
		>
			<>
				<GroupButton name='sss' event>
					<GroupButtonImg onClick={() => navigate('/review')} src={ad} />

					{/* 사람들이 좋아하는 <br />
				놀이동산 리뷰 알아보러 가기 */}
				</GroupButton>
			</>
			<AppBlock>
				<Button></Button>
				<Button color='gray'></Button>
				<Button color='pink'></Button>
				<ContainerButton>
					서울 경복궁
					<br />
					<span>★★</span>
				</ContainerButton>
				<ContainerButton>
					서울 경복궁
					<br />
					<span>★★</span>
				</ContainerButton>
				<ContainerButton>
					서울 경복궁
					<br />
					<span>★★</span>
				</ContainerButton>
			</AppBlock>
			<GroupButton name='sss' event>
				일본 벚꽃 명소
				<br />한 눈에 알아보러 가기
			</GroupButton>
			<AppBlock>
				<Button></Button>
				<Button color='gray'></Button>
				<Button color='pink'></Button>
				<ContainerButton>
					일본
					<br />
					<span>★★</span>
				</ContainerButton>
				<ContainerButton>
					일본
					<br />
					<span>★★</span>
				</ContainerButton>
				<ContainerButton>
					일본
					<br />
					<span>★★</span>
				</ContainerButton>
			</AppBlock>
			<GroupButton name='sss' event>
				동백꽃
				<br />
				인스타 인생사진
			</GroupButton>
			<AppBlock>
				<Button></Button>
				<Button color='gray'></Button>
				<Button color='pink'></Button>
				<ContainerButton>
					제주도
					<br />
					<span>★★</span>
				</ContainerButton>
				<ContainerButton>
					제주도
					<br />
					<span>★★</span>
				</ContainerButton>
				<ContainerButton>
					제주도
					<br />
					<span>★★</span>
				</ContainerButton>
			</AppBlock>
		</ThemeProvider>
	);
}

export default Mainpage;

// import React from 'react';
// import styled from 'styled-components';
// import Button from '../../components/Button';

//  const page = styled.div`

// const AppBlock = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   height: 160px;
//   width: 100%;
//   gap: 32px;
//   margin: 4px;
//   row-gap: 0.1rem;
// `;
// /* min-width: 30rem;
//   max-width: 30rem;
//   margin: 4rem auto;
//   gap: 100px 32px; */

// /* column-gap: 1.4rem; */

// /* display: grid;
//   grid-template-rows: repeat(3, 1fr);
//   grid-template-columns: repeat(3, 1fr);
//   width: 1000px;
//   width: 100%;
//   justify-content: space-between;
//   align-content: stretch;
//   gap: 20px 10px;
// `; */

// function Mainpage() {
//   return (
//     <AppBlock>
//       <Button name="sss" event>
//         사람들이 좋아하는
//         <br />
//         <span>놀이동산 리뷰 알아보러 가기</span>
//         <span>둘러보기</span>
//       </Button>

//       <>
//         <Button name="s">서울관광지</Button>
//         <Button name="ss">서울맛집</Button>
//       </>
//       <Button name="sss" disabled>
//         서울숙소
//       </Button>
//       <Button name="sss" event>
//         사람들이 좋아하는
//         <br />
//         <span>놀이동산 리뷰 알아보러 가기</span>
//         <span>둘러보기</span>
//       </Button>
//       <Button name="s">서울관광지</Button>
//       <Button name="ss">서울맛집</Button>
//       <Button name="sss" disabled>
//         서울숙소
//       </Button>
//       <Button name="sss" event>
//         사람들이 좋아하는
//         <br />
//         <span>놀이동산 리뷰 알아보러 가기</span>
//         <span>둘러보기</span>
//       </Button>
//       <Button name="s">서울관광지</Button>
//       <Button name="ss">서울맛집</Button>
//       <Button name="sss" disabled>
//         서울숙소
//       </Button>

// export default Mainpage;
