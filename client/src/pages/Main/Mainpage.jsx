import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../../components/Button';

const ContainerButton = styled.div`
	padding: 0.2rem 1rem;
	grid-template-columns: repeat(3, 1fr);
`;

const GroupButton = styled.div`
	display: grid;

	padding: 6rem;
	width: 1000px;
	margin-top: 160px;
	margin: 100px auto;
	/* margin-left: 450px; */
	/* margin-right: 450px; */
	border: 1px solid black;
`;

const AppBlock = styled.div`
	margin: 0 auto;
	margin-top: 100px;
	border: 1px solid black;
	padding: 1rem;
	display: grid;
	/* grid-template-rows: repeat(3, 1fr); */
	grid-template-columns: repeat(3, 1fr);
	width: 1000px;
	/* width: 100%; */
	/* justify-content: space-between; */
	/* align-content: stretch; */
	gap: 20px 32px;
`;

function Mainpage() {
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
			<GroupButton name='sss' event>
				사람들이 좋아하는 <br />
				<span>놀이동산 리뷰 알아보러 가기</span>
			</GroupButton>
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
				<br />
				<span>한 눈에 알아보러 가기</span>
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
				<span>인스타 인생사진</span>
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
