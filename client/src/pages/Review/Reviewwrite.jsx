import React from 'react';
import styled from "styled-components"

import {FaUserCircle} from 'react-icons/fa';

import 이미지 from '../../assets/default.jpg'

const Review = styled.div`
	position : absolute;
	top:0 ;
	left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	width: 100%;
	height: 100%;
	background-color:  rgba(0,0,0,0.2);

`
const Modal = styled.div`
position : relative;
	top:50px;
	padding: 10px;

	min-width: 380px;
width: 37%;
height:680px;
/* text-align: center; */
padding :16px;
background-color:  rgb(245, 245, 245);
align-items:center;
border-radius:10px;
display: block;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;

`
const Text = styled.p`
    margin: 0;
	font-size: 14px;
	margin-bottom: 4px;
	text-align: left;
	padding-left:75px;
`
const Container = styled.div`
margin : 16px 4px;
text-align: center;
align-items: center;
`
const Img=styled.img`
min-width: 113px;
width:25% ;
height: 200px;
border:solid 1px gray;
color: gray;
/* background-color: gray; */
/* margin: auto; */
`
const Input=styled.input`
width: 80%;
min-width: 346px;
height: 24px;
margin-bottom:8px;
padding-left: 8px;
border-radius: 3px;
border: 0.5px solid gray;
`
const Button = styled.button`
box-shadow: 0px 1px 1px 1px rgb(0,0,0,0.2);
cursor: pointer;
font-size: 12px;
	width: 45px;
	height: 27px;
	border-radius: 10px;
	background-color: #FD8E0D; 
`
const UserID = styled.p`
    margin-left:8px;
	font-size: 15px;
	margin-bottom: 4px;
	align-items: center;
	justify-content: center;
	justify-items: center;
	font-weight: bold;
`
function Reviewwrite() {
	return <Review>
	<Modal>
	<Container style={{display:'flex',paddingLeft:'74px'}}>
    <FaUserCircle size="60" color='#BDBDBD'/>
	<UserID >사용자아이디</UserID>
	</Container>
	<Container style={{display:'flex',justifyContent:'center'}}>
		<Img style={{marginRight:'4px'}} src={이미지}/>
		<Img style={{backgroundColor:'white',marginRight:'4px'}}src={이미지}/>
		<Img src={이미지}/>
	</Container>
	<Container style={{borderBottom:'solid 1px gray'}}>
     별점 자리
	</Container>
	<Container >
	<Input placeholder='이곳에 다녀온 경험을 자세히 공유해 주세요'style={{height:'100px',marginbottom: '12px',textAlign:'start'}}/>
	<Text>리뷰 제목을 달아주세요</Text>
	<Input />
	<Text >방문한 날짜를 선택해주세요</Text>
	<Input type='date'/>
	<Text >태그를 작성해주세요</Text>
	<Input/>
</Container>
<Container >
	<Button style={{backgroundColor:'white',marginRight:'8px'}}>취소</Button>
	<Button>게시</Button>
</Container>
	</Modal>

	</Review>
}

export default Reviewwrite;
