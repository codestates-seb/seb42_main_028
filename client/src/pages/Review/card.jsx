import React from 'react';
import styled from 'styled-components';

import 이미지 from '../../assets/footerlogo.png'

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
   color:${(props) => props.color };
`
const Container=styled.div`
   margin-top:${(props) => props.margin_top  };
   margin-bottom:${(props) => props.margin_bottom  };
`

function Card(){
  return <>
  <Cardbox>
    <Container>
        <Text font_size='16px' font_weight='bold' color='#313131' margin_buttom='8px'>
        소개
        </Text>
        <Text color='#424242'>
        카운터석과 개방형 주방이 있는 세련되고 현대적인 초밥 전문점에서 초밥과 김밥을 맛볼 수 있습니다.
        </Text>
    </Container>
    <Container margin_top='12px'>
        <Text font_size='16px' font_weight='bold' color='#313131' margin_buttom='8px'>
        영업시간
        </Text>
        <Text color='#424242'>
         일요일 오전 11:30 ~ 오후 9:30 <br/>
         월요일 휴무일<br/>
         화요일 오전 11:30 ~ 오후 10:30<br/>
         수요일 오전 11:30 ~ 오후 10:30<br/>
         목요일 오전 11:30 ~ 오후 10:30<br/>
         금요일 오전 11:30 ~ 오후 10:30<br/>
         토요일 오전 11:30 ~ 오후 10:30<br/>

        </Text>
    </Container>
  </Cardbox>
  </>
}

export default Card;