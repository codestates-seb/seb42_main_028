import React from 'react';
import styled from 'styled-components';

import Reviewcard from './Reviewcard';
import Card from './card';
import Card2 from './card2';
import Star from '../../components/Star';
import Reviewlist from '../Review/Reviewlist'
import Layout  from '../../layout/Layout';

import Searchicon from './search.png'

import {AiOutlineSearch} from 'react-icons/ai'

const Text = styled.div`
margin-bottom: ${(props) => props.margin_buttom };
font-size: ${(props) => props.font_size || '14px' };
font-weight:  ${(props) => props.font_weight };
color:${(props) => props.color }; 
cursor: ${(props) => props.cursor };
text-decoration:${(props) => props.text_decoration };
`

const Adminpage1 = styled.div`
	/* margin-left: 450px;
	margin-right: 450px; */
`
const Container=styled.div`
margin-top:${(props) => props.margin_top  };
margin-bottom:${(props) => props.margin_bottom  };
display:${(props) => props.display || 'block' }; 
align-items: ${(props) => props.align_items ||'center'};
`

const Img = styled.div`
margin-left: ${(props) => props.margin_left };
margin-right: ${(props) => props.margin_right };
width: ${(props) => props.width };
height: ${(props) => props.height };
background-color: #424242;
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


function Reviewpage() {
	return <div>
		<Adminpage1>
			<Container margin_top='130px' >
               <Text font_size = '22px' font_weight= 'bold' margin_buttom='28px'>
				카메스시
			   </Text>
			   <Text  margin_buttom = '4px'>
				<Star/>
			   </Text>
			   <Text margin_buttom='32px'cursor='pointer'text_decoration='underline' >
				리뷰쓰기
			   </Text>
			</Container>
			<Container display='flex' margin_bottom='120px'>
				<Img width='522px' height='290px' margin_left='4px' margin_right='32px'>
					이미지자리
				</Img>
				<Card/>
			</Container>
			<Container display='flex' margin_bottom='120px'>
				<Img width='522px' height='290px' margin_left='4px' margin_right='32px'>
					이미지자리 
				</Img>
				<Card2/>
			</Container>
			<Container margin_bottom='40px'>
			    <Text font_size= '22px' font_weight= 'bold'>
				리뷰
			   </Text>
			</Container>
			<Container margin_bottom='16px' display='felx'>
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

		</Adminpage1>
		
		</div>;
}

export default Reviewpage;
