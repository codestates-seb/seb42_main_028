import React from 'react';
import styled from 'styled-components';

const Adminpage1=styled.div`
margin: 150px 450px 0 450px;
display: ${(props) => props.display ||'block' };
align-items: ${(props) => props.align_items ||'center' };
`
const Input=styled.input`
width: 900px;
height: ${(props) => props.height};
`
const Img=styled.div`
width: ${(props) => props.width};
height: ${(props) => props.height};
background-color: gray;
`
const Text = styled.div`
margin-Top: ${(props) => props.margin_top };
margin-bottom: ${(props) => props.margin_buttom };
margin-left: ${(props) => props.margin_left };
font-size: ${(props) => props.font_size || '14px' };
font-weight:  ${(props) => props.font_weight };
color:${(props) => props.color }; 
`
const Container = styled.div`
margin : ${(props)=> props.margin || '1px 1px 1px 1px'};
display: ${(props) => props.display ||'flex' };
align-items: ${(props) => props.align_items ||'center' }
`
const Button = styled.button`
box-shadow: 0px 1px 1px 1px rgb(0,0,0,0.2);
cursor: pointer;
font-size: 12px;
	width: 47px;
	height: 24px;
	border-radius: 10px;
	color:${(props) => props.color }; 
    margin-right:${(props) => props.margin_right };
	background-color: ${(props) => props.background_color || '#FD8E0D' };

`

function Adminpage() {
 return <>
 <Adminpage1>
 <Img width='360px' height='230px'></Img>
 <Text>제목</Text>
 <Input></Input>
 <Text>장소 소개를 작성해주세요</Text>
 <Input></Input>
 <Text>영업시간을 작성해주세요</Text>
 <Input></Input>
 <Img width='480px' height='186px'></Img>
 <Text>위치를 작성해주세요</Text>
 <Input></Input>
 <Text>인근지역을 작성해주세요</Text>
 <Input></Input>
 <Button background_color='white'>취소</Button>
 <Button>게시</Button>
 </Adminpage1>
 </>
}

export default Adminpage;
