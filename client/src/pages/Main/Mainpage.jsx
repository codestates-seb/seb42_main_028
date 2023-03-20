import React from 'react';
import { useNavigate } from 'react-router';
import ad from '../../assets/ad.png';
import ad2 from '../../assets/ad2.png';
import ad3 from '../../assets/ad3.png';
import styled, { ThemeProvider } from 'styled-components';
import Button from '../../components/Button';
import Star from '../../components/Star';

//배너
const GroupButtonImg = styled.img`
	width: 125%;
	object-fit: cover;
	margin: -4px 20px 20px 20px;

	/* height: 1200%; */
`;
const GroupButton = styled.div`
/* 	배너 반은형 완성 */
    justify-content: center;
    align-items: center;
    display: flex;
    width: 1000px;
    width:100% 
    width: max-content;
    padding: 4rem 6.2rem 4rem 6.2rem;
	margin: 10px  auto 0  auto;
    /* border: 1px solid red; */
    /* color:red;
   font-size: 1.6rem;
   font-weight: 700; */
   /* font-shadow:4px; */
   /* font-shadow: 0 4px 4px 0; */
  
`;

const Title = styled.div`

/* justify-content: center;
    align-items: center; */
    display: flex;
    width: 1000px;
    width:100% 
    width: max-content;
	padding: 0.4rem 0.4rem 0.4rem 1.8rem;
	margin: 10px  auto 0  auto;
	/* border: 1px solid red; */
	color: black;
	font-size: 1.6rem;
	font-weight: 900;
`;

//3버튼
const AppBlock = styled.div`
	display: grid;
	width: 1000px;
	margin: 8px auto 0 auto;
	padding: 0.8rem;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px 32px;
	font-size: 1.2rem;
	/* border: 1px solid red; */

	/* box-shadow: 0 4px 4px 0; */
	/* border-left: 1px solid #000; 배너박스*/
	/* grid-template-rows: repeat(3, 1fr); */
	/* justify-content: space-between; */
	/* align-content: stretch; */
`;

//✭
// const ContainerButton = styled.div`
// 	padding: 0.8rem 1rem;
// 	grid-template-columns: repeat(3, 1fr);
// `;
function Mainpage() {
	const navigate = useNavigate();
	return (
		<ThemeProvider
			theme={{
				palette: {
					blue: '#d3f4f3',
					gray: '#e5e9ed',
					pink: '#f4e2e8',
				},
			}}
		>
			<>
				<GroupButton name='sss' event>
					<GroupButtonImg onClick={() => navigate('/review')} src={ad} />
				</GroupButton>
			</>
			<Title>서울 추천</Title>
			<AppBlock>
				<Button></Button>
				<Button></Button>
				<Button></Button>
				<Button size='small'>
					<span>
						서울 경복궁
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>
				<Button size='small'>
					<span>
						서울 카페
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>

				<Button size='small'>
					<span>
						신라호텔
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>
			</AppBlock>

			<GroupButton name='sss' event>
				<GroupButtonImg onClick={() => navigate('/review')} src={ad2} />
			</GroupButton>
			<Title>일본 추천</Title>
			<AppBlock>
				<Button color='pink'></Button>
				<Button color='pink'></Button>
				<Button color='pink'></Button>

				<Button color='pink' size='small'>
					<span>
						일본 도쿄
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>
				<Button color='pink' size='small'>
					<span>
						도쿄 초밥
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>
				<Button color='pink' size='small'>
					<span>
						일본 숙소
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>
			</AppBlock>

			<GroupButton color='pink' name='sss' event>
				<GroupButtonImg onClick={() => navigate('/review')} src={ad3} />
			</GroupButton>
			<Title>제주도 추천</Title>
			<AppBlock>
				<Button color='blue'></Button>
				<Button color='blue'></Button>
				<Button color='blue'></Button>

				<Button color='blue' size='small'>
					<span>
						제주 성산일출봉
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>
				<Button color='blue' size='small'>
					<span>
						애월 갈치조림
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>
				<Button color='blue' size='small'>
					<span>
						제주 호텔
						<br />
						<div>
							<Star />
						</div>
					</span>
					제주 호텔
				</Button>
			</AppBlock>
		</ThemeProvider>
	);
}

export default Mainpage;
