import React from 'react';
import styled from 'styled-components';

import 이미지 from '../../assets/footerlogo.png'
const Cardbox = styled.div`
display: block;
align-items: ${(props) => props.align_items ||'center' };
margin-left: ${(props) => props.margin_left };
width: ${(props) => props.width || '358px'};
height: ${(props) => props.height || '203px'};
background-color: white;
box-shadow: 0px 3px 4px 1px rgb(0,0,0,0.2);
border:solid 0.5px #E6E6E6;
border-radius:10px;
`
const Text = styled.div`
margin-bottom: ${(props) => props.margin_buttom };
font-size: ${(props) => props.font_size || '14px' };
font-weight:  ${(props) => props.font_weight };
color:${(props) => props.color }; ;
`
const Container=styled.div`
margin-top:${(props) => props.margin_top  };
margin-left:${(props) => props.margin_left  };
margin-right:${(props) => props.margin_right  };
margin-bottom:${(props) => props.margin_bottom  };
display:${(props) => props.display || 'block' }; 
`
function Card(){
  return <>
  <Cardbox>
    <Container margin_top='16px' margin_left='16px' margin_right='16px'>
      <div src={이미지}></div>
        <Text font_size='16px' font_weight='bold' color='#313131' margin_buttom='8px'>
        소개
        </Text>
        <Text color='#424242'>
            ddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        </Text>
    </Container>
    <Container margin_top='20px' margin_left='16px' margin_right='16px'>
        <Text font_size='16px' font_weight='bold' color='#313131' margin_buttom='8px'>
        영업시간
        </Text>
        <Text color='#424242'>
            dd
        </Text>
    </Container>
  </Cardbox>
  </>
}

export default Card;