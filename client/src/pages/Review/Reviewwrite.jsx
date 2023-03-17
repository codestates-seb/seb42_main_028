import React from 'react';
import styled from "styled-components"
import {FaUserCircle} from 'react-icons/fa';


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
width: 45%;
height: 70%;
/* text-align: center; */
padding :16px;
background-color:  rgb(245, 245, 245);
/* align-items:center; */


`
const Text = styled.p`
    margin: 0;
	font-size: 15px;
	margin-bottom: 4px;
`
const Container = styled.div`
margin : 12px 4px;
align-items: ${(props) => props.align_items};
`
const Img=styled.div`
min-width: 113px;
width:23% ;
height: 200px;
background-color: gray;
/* margin: auto; */
`
const Input=styled.input`
width: 80%;
min-width: 346px;
margin-bottom:8px;
padding-left: 8px;

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
function Reviewwrite() {
	return <Review>
	<Modal>
	<Container style={{display:'flex'}}>
    <FaUserCircle size="60" color='#BDBDBD'/>
	<Text style={{fontWeight:'bold',textAlign:'left'}}>사용자아이디</Text>
	</Container>
	<Container style={{display:'flex'}}>
		<Img style={{marginRight:'4px'}}></Img><Img style={{backgroundColor:'white',marginRight:'4px'}}></Img><Img></Img>
	</Container>
	<Container style={{borderBottom:'solid 1px black',padding:'12px 100px'}}>
     별점 자리
	</Container>
	<Container >
	<Input style={{height:'100px',marginbottom: '12px'}}></Input>
	<Text style={{fontSize:'14px'}}>리뷰 제목을 달아주세요</Text>
	<Input />
	<Text style={{fontSize:'14px'}}>방문한 날짜를 선택해주세요</Text>
	<Input/>
	<Text style={{fontSize:'14px'}}>태그를 작성해주세요</Text>
	<Input/>
</Container>
<Container style={{alignItems:'center'}}>
	<Button style={{backgroundColor:'white'}}>취소</Button>
	<Button>게시</Button>
</Container>
	</Modal>

	</Review>
}

export default Reviewwrite;
