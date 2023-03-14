import React from 'react';
import styled from 'styled-components';


import {AiOutlineLike} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa' 
import {MdExpandMore} from 'react-icons/md'

import Star from '../../components/Star';

const Card = styled.div`
	width: 1000px;
    height: 331px;
    border-top:solid 1px #FD8E0D ;
    background-color: white;

`
const Flex = styled.div`
align-items: ${(props) => props.align_items};
text-align:  ${(props) => props.text_align};
flex: ${(props) => props.flex ||'1' }

`
const Icon = styled.div`
margin: ${(props) => props.margin ||'10px 10px 10px 10px' };
`
const Container = styled.div`
margin-left: ${(props) => props.margin_left };
margin-right: ${(props) => props.margin_right };
margin-Top: ${(props) => props.margin_Top };
display: ${(props) => props.display ||'flex' };
align-items: ${(props) => props.align_items ||'center' }
`

const Text = styled.div`
margin-bottom: ${(props) => props.margin_buttom };
font-size: ${(props) => props.font_size || '14px' };
font-weight:  ${(props) => props.font_weight };
color:${(props) => props.color }; ;
`
const Img = styled.div`
margin-left: ${(props) => props.margin_left };
width:75px;
height: 84px;
background-color: #424242;
`

function Reviewcard(){
    return <>
<Card>
    <Container>
    <Icon margin='20px 8px 20px 36px'>
     <FaUserCircle size="74" color='gray'/>
    </Icon>
    <Flex flex='10'>
     <Text margin_buttom='4px' font_weight='bold'>
    사용자닉네임
    </Text>
    <Text margin_buttom='20px' color='#808080' font_size='13px'>
    2023-03-13
    </Text>
    <div>
    <Star/>
    </div>
    </Flex>
    <Flex text_align='center'>
     <AiOutlineLike size="30" color='#424242'/>
     <Flex text_align='center' >0</Flex>
    </Flex>
    </Container>
    <Container display='block' margin_left='48px' margin_right='48px' >
        <Text margin_buttom='4px' font_size= '16px' font_weight= 'bold' >
        제목
        </Text>
        <Text margin_buttom='12px' font_size= '13px' color='#808080'>
        방문날짜:4월7일
        </Text>
        <Text>내용ddddddddddddddddddddddddddddddddddddddddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</Text>
    </Container>
    <Container margin_left='48px' margin_right='48px' margin_Top='4px'>
    <Img/>
    <Img  margin_left='12px'/>
    <Img  margin_left='12px'/>
    </Container>
    <Container margin_left='48px' margin_right='48px' margin_Top='4px'>
    <Flex >
     <Text font_size='12px'>
     #오마카세 #일본
     </Text>
     </Flex>
     <MdExpandMore size='30' color='#FD8E0D'/>
    </Container>
</Card>
</>
}

export default Reviewcard;