import React, { useState } from 'react';
import styled from 'styled-components';

import {AiOutlineLike} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa' 
import {MdExpandMore} from 'react-icons/md'

import Star from '../../components/Star';
import Reviewlist from './Reviewlist';
import Layout from '../../layout/Layout';
import Kame1 from '../../assets/후기1.png';
import Kame2 from '../../assets/후기2.png'

const UserReview = styled.div`
    /* max-width:950px ; */
    width: 100%;
`
const Card = styled.div`
    width: 100%;
    max-width:950px ;
    min-width:360px;
    border-top:solid 1px #FD8E0D ;
    background-color: white;
    margin-top: 20px;
`
const Flex = styled.div`
   align-items: ${(props) => props.align_items};
   text-align:  ${(props) => props.text_align};
   flex: ${(props) => props.flex ||'1' }
`
const Icon = styled.div`
   margin:20px 8px 20px 36px;
`
const Container = styled.div`
   margin-left: ${(props) => props.margin_left };
   margin-right: ${(props) => props.margin_right };
   margin-top: ${(props) => props.margin_Top };
   display: ${(props) => props.display ||'flex' };
   align-items: ${(props) => props.align_items ||'center' }
`

const Text = styled.div`
   margin-bottom: ${(props) => props.marginbuttom };
   font-size: ${(props) => props.fontsize };
   font-weight:  ${(props) => props.font_weight };
   color:${(props) => props.color }; ;
`
const Img = styled.img`
   margin-left: ${(props) => props.margin_left };
   min-width: 90px;
   height: 84px;
   background-color: #424242;
`
const UserText = styled.div`
   font-size: 14px;
   font-weight:bold;
   margin-buttom:4px;
`
const UserInfoContainer =styled.div`
    flex: 4;
`

function Reviewcard({ review }){
  const [like,setLick] = useState(0);

  const {
    title,
    content,
    createdAt,
    reviewId,
    reviewStatus,
    visitDate,
  } = review;

return <>
 <Layout>
   <UserReview>
     <Card>
      <Container display='block' margin_left='48px' margin_right='48px' margin_Top='20px' >
        <Text marginbuttom='4px' fontsize= '16px' font_weight= 'bold' >
          {title}
        </Text>
        <Text marginbuttom='12px' fontsize= '13px' color='#808080'>
          방문날짜: {visitDate}
        </Text>
        <Text>{content}</Text>
      </Container>
    <Container margin_left='48px' margin_right='48px' margin_Top='4px'>
    <Img src={Kame1} />
    <Img  src={Kame2} margin_left='12px'/>
    </Container>
    <Container margin_left='48px' margin_right='48px' margin_Top='4px'>
    <Flex >
     <Text fontsize='12px'>
     #오마카세 #일본
     </Text>
     </Flex>
     <button onClick={()=>{
     }}><MdExpandMore style={{height:'auto'}} size='28' color='#FD8E0D'/></button>
    </Container>
</Card>
</UserReview>
</Layout>
</>
}

export default Reviewcard;
