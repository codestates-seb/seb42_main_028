import React from 'react';
import { useNavigate } from 'react-router';
import ad from '../../assets/ad.png';
import ad2 from '../../assets/ad2.png';
import ad3 from '../../assets/ad3.png';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';
import Star from '../../components/Star';
import s1 from '../../assets/s1.png';
import s2 from '../../assets/s2.png';
import s3 from '../../assets/s3.png';
import J1 from '../../assets/J1.png';
import J2 from '../../assets/J2.png';
import J3 from '../../assets/J3.png';
import H1 from '../../assets/H1.png';
import H2 from '../../assets/H2.png';
import H3 from '../../assets/H3.png';

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
					blue: '#f9fcfb',
					gray: '#e5e9ed',
					pink: '#fefcfd',
				},
			}}
		>
			<>
				<GroupButton name='sss' event>
					<GroupButtonImg onClick={() => navigate('/review')} src={ad} />
				</GroupButton>
			</>
			<Title>서울 추천</Title>
			{/* 여기 바꿈*/}
			<AppBlock>
				<ButtonImg onClick={() => navigate('/review')} src={s1}></ButtonImg>
				<ButtonnImg onClick={() => navigate('/review')} src={s2}></ButtonnImg>
				<ButtonnImg onClick={() => navigate('/review')} src={s3}></ButtonnImg>
				<Button color='pink' size='small'>
					<span>
						종로 경복궁
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>
				<Button color='pink' size='small'>
					<span>
						성수동 카페
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>

				<Button color='pink' size='small'>
					<span>
						강남 조선 팰리스
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
				<ButtonImg onClick={() => navigate('/review')} src={J1}></ButtonImg>
				<ButtonImg onClick={() => navigate('/review')} src={J2}></ButtonImg>
				<ButtonImg onClick={() => navigate('/review')} src={J3}></ButtonImg>

				<Button color='pink' size='small'>
					<span>
						도쿄
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
				<ButtonImg onClick={() => navigate('/review')} src={H1}></ButtonImg>
				<ButtonImg onClick={() => navigate('/review')} src={H2}></ButtonImg>
				<ButtonImg onClick={() => navigate('/review')} src={H3}></ButtonImg>

				<Button color='blue' size='small'>
					<span>
						서귀포 성산일출봉
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
						서귀포 신라호텔
						<br />
						<div>
							<Star />
						</div>
					</span>
				</Button>
			</AppBlock>
		</ThemeProvider>
	);
}

export default Mainpage;
