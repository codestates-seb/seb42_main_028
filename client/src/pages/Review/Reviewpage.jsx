import React from 'react';
import styled from 'styled-components';

import Reviewcard from './Reviewcard';
import Card from './card';
import Card2 from './card2';
import Star from '../../components/Star';
import Reviewlist from '../Review/Reviewlist';
import DefaultReviewCard from './DefaultReviewCard';

import 이미지 from '../../assets/default.jpg'

// import {AiOutlineSearch} from 'react-icons/ai'

const ReviewPage = styled.div`
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
const Text = styled.div`
   margin-bottom: 32px;
   cursor: pointer;
   text-decoration:underline;
   font-size: 14px;
`
const Search = styled.input`
   padding-left: 12px;
   width: 800px;
   height: 36px;
   border-radius: 10px;
   border: 1px solid #D9D9D9;
   margin-right: 20px;
   cursor: default;
`
function Reviewpage() {
	return <div>
		<ReviewPage>
			<Review>
			{/* <Reviewwrite/> */}
			<TittleContainer >
               <TittleText>
				카메스시
			   </TittleText>
			   <Text>
				<Star/>
			   </Text>
			   <Text >
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
			<Container style={{justifyContent:'center'}}>
			 <Search placeholder='로그인이 필요합니다' type='text' readOnly />
			
			 <div>
				
			  {/* <Button background_color='white' margin_right='4px'>
				리뷰쓰기
			 </Button>   */}
			 <Button>
				정렬
			 </Button>
			 </div>
			</Container>
			   {/* <Reviewcard/> */}
               <DefaultReviewCard/>
			   {/* <Reviewlist/> */}
          </Review>
		</ReviewPage>
		
		</div>;
}

export default Reviewpage;
