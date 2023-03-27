import React from 'react';
import styled from 'styled-components';

const Cardbox = styled.div`
padding: 16px;
margin-left: ${(props) => props.margin_left };
max-width: 340px;
height: 230px;
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
margin-bottom:${(props) => props.margin_bottom  };
`
function Card2(){
  return <>
  <Cardbox>
    <Container>
        <Text font_size='16px' font_weight='bold' color='#313131' margin_buttom='8px'>
        위치
        </Text>
        <Text color='#424242'>
            ddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
        </Text>
    </Container>
    <Container margin_top='20px' >
        <Text font_size='16px' font_weight='bold' color='#313131' margin_buttom='8px'>
        인근지역
        </Text>
        <Text color='#424242'>
            dd
        </Text>
    </Container>
  </Cardbox>
  </>
}


export default Card2;