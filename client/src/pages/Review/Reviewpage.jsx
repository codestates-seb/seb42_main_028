import React from 'react';
import styled from 'styled-components';

import Reviewcard from './Reviewcard';
import Card from './card';
import Card2 from './card2';
import Star from '../../components/Star';
import Reviewlist from '../Review/Reviewlist';

import 이미지 from '../../assets/default.jpg'

// import {AiOutlineSearch} from 'react-icons/ai'

const Text = styled.div`
margin-bottom: ${(props) => props.margin_buttom };
font-size: 14px;
font-weight:  ${(props) => props.font_weight };
cursor: ${(props) => props.cursor };
text-decoration:${(props) => props.text_decoration };
`

const Adminpage1 = styled.div`
	margin-top: 150px;
`
const TittleContainer=styled.div`
/* display: block; */
/* margin-bottom: 28px; */

`
const Review= styled.div`
margin-top: 150px;
min-width: 100px;
max-width: 1000px;
width: 100%;
`
const TittleText=styled.div`
font-size:22px;
font-weight: bold;
`

/* align-items: ; */

const Container=styled.div`
display: flex;
margin-right: 8px;
margin-bottom: 8px;

/* align-items: ; */
`
const Img = styled.img`
width: 170px;
height: 186px;
background-color: #424242;
margin-bottom: 8px;
margin-right:8px ;
`

const Search = styled.input`
   background-image:Searchicon;
	width: 800px;
	height: 33px;
	border-radius: 10px;
	border: 1px solid #D9D9D9;
	margin-right: 20px;
`
const Button = styled.button`
box-shadow: 0px 1px 2px 2px rgb(0,0,0,0.2);
cursor: pointer;
font-size: 15px;
	width: 75px;
	height: 33px;
	border-radius: 10px;
	color:${(props) => props.color }; 
	text-align: center;
	background-color: ${(props) => props.background_color || '#FD8E0D' };
	margin-right: ${(props) => props.margin_right }; 
	
`
const MainImg = styled.img`
min-width: 115px;
width: 40%;
height: 380px;
margin-right: 8px;
background-color: #424242;
`

const MapImg=styled.img`
	width: 520px;
	height: 280px;
	margin-right: 14px;
	
`

function Reviewpage() {
	return <div>
		<Adminpage1>
			<Review>
			{/* <Reviewwrite/> */}
			<TittleContainer >
               <TittleText>
				카메스시
			   </TittleText>
			   <Text  margin_buttom = '4px'>
				<Star/>
			   </Text>
			   <Text margin_buttom='32px'cursor='pointer'text_decoration='underline' >
				리뷰쓰기
			   </Text>
			</TittleContainer>
			<Container >
				<MainImg src={이미지}/>
				<Container style={{flexDirection:'column'}}>
				 <Img src={이미지}/>
				 <Img src={이미지}/>
				</Container>
				<Card/>
			</Container>
			<Container >
				<MapImg />
				<Card2/>
			</Container>
			<Container >
			    <TittleText >
				리뷰
			   </TittleText>
			</Container>
			<Container >
			 <Search className='써치바'/>
			
			 <div>
			 <Button background_color='white' margin_right='4px'>
				리뷰쓰기
			 </Button>
			 <Button>
				정렬
			 </Button>
			 </div>
			</Container>
			   
               <Reviewcard></Reviewcard>
			   <Reviewlist/>
</Review>
		</Adminpage1>
		
		</div>;
}

export default Reviewpage;
