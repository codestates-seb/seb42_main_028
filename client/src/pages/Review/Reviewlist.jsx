import React from 'react';
import styled from 'styled-components';

import {FaUserCircle} from 'react-icons/fa'; //프로필 아이콘
import {MdExpandMore}from 'react-icons/md';

const Card = styled.div`
margin-top: 20px;
	width: 100%;
    height: 760px;
    border-top:solid 1px #FD8E0D ;
    background-color: white;
    padding: 28px 32px;

`
const List = styled.div`
	width: 100%;
    height: 170px;
    border:solid 1px #FD8E0D ;
    border-radius: 2px;
    background-color: white;
    padding: ${(props) => props.padding ||'1px 1px 1px 1px' };

`
const Input = styled.input`
	width: 90%;
	height: 36px;
	padding-left: 12px;
	border-radius: 10px;
	border: 1px solid #d9d9d9;
    outline: none;

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
	height: 27px;
	border-radius: 10px;
	color:${(props) => props.color }; 
    margin-right:${(props) => props.margin_right };
	background-color: ${(props) => props.background_color || '#FD8E0D' };

`
const Flex = styled.div`
align-items: ${(props) => props.align_items};
flex: ${(props) => props.flex ||'1' }
`


function Reviewlist(){

    return <>
<Card>
 <Container style={{justifyContent:'space-between'}} margin='0px 0 18px 0px' >
    <Flex>
     <Input type="text"  maxLength="300" placeholder='로그인 후 댓글 작성이 가능합니다'/>
    </Flex>
    <Button background_color='white' margin_right='4px'>등록</Button>
 </Container>
 <Container margin='0px 0 4px 0px' >
    <List padding='20px 40px '>
     <Container>
     <FaUserCircle size='50' color='#424242'/>
     <Flex>
      <Text font_size='13px' margin_buttom='8px' margin_left='12px' font_weight='bold' >
       박자바
      </Text>
      <Text font_size='10px' margin_left='12px' color='gray'>
       시간
      </Text>
     </Flex>
     <div>
      <Button background_color='white' margin_right='4px'>수정</Button>
      <Button>삭제</Button>
     </div>
     </Container>
     <Text margin_top='12px' >
      카메스시 몇시에가야 웨이팅 없나요?
     </Text>
    </List>
 </Container>
</Card>
    </>
}

export default Reviewlist;