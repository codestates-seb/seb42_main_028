import React from 'react';
import { useNavigate } from 'react-router';
import ad from '../../assets/ad.png';
import ad2 from '../../assets/ad2.png';
import ad3 from '../../assets/ad3.png';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';
import Star from '../../components/Star';
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s1.png';
import j2 from '../../assets/s1.png';

//배너
const GroupButtonImg = styled.img`
	width: 1002px;
	object-fit: cover;
	margin: -4px 20px 20px 20px;

	/* height: 1200%; */
`;
const GroupButton = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	width: 1000px;
	padding: 40px 96px 40px 96px;
	margin: 10px auto 0 auto;
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
	padding: 0 0 4px 8px;
	margin: auto;
	/* border: 1px solid red; */
	color: black;
	font-size: 28px;
	font-weight: 900;
`;

//3버튼
const AppBlock = styled.div`
	display: grid;
	width: 1000px;
	margin: 8px auto 0 auto;
	padding: 8px;
	grid-template-columns: repeat(3, 1fr);
	gap: 12px 32px;
	font-size: 12px;
	/* border: 1px solid red; */

	/* box-shadow: 0 4px 4px 0; */
	/* border-left: 1px solid #000; 배너박스*/
	/* grid-template-rows: repeat(3, 1fr); */
	/* justify-content: space-between; */
	/* align-content: stretch; */
`;

const ButtonImg = styled.img`
	&:hover {
		cursor: pointer;
		filter: brightness(0.7);
	}
`;
const ButtonnImg = styled.img`
	&:hover {
		cursor: pointer;
		filter: brightness(0.7);
	}
`;

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
					{/* 여기 */}
					<GroupButtonImg onClick={() => navigate('/review')} src={ad} />
				</GroupButton>
			</>
			<Title>서울 추천</Title>
			<AppBlock>
				<ButtonImg onClick={() => navigate('/review')} src={s1}></ButtonImg>
				<ButtonnImg onClick={() => navigate('/review')} src={s2}></ButtonnImg>
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
				<ButtonImg onClick={() => navigate('/review')} src={j2}></ButtonImg>
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
