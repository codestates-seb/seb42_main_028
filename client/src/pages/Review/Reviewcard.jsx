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
    height: 330px;
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
   margin-Top: ${(props) => props.margin_Top };
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

function Reviewcard(){
  const [like,setLick] = useState(0);

return <>
 <Layout>
   <UserReview>
     <Card>
      <Container>
        <Icon>
         <FaUserCircle size="74" color='gray'/>
        </Icon>
         <UserInfoContainer >
           <UserText>
              김코딩
           </UserText>
             <Text marginbuttom='20px' color='#808080' fontsize='13px'>
               2023-03-13
             </Text>
               <div>
                 <Star/>
               </div>
          </UserInfoContainer>
           <Flex text_align='center'>
             <button onClick={()=>{}}><AiOutlineLike size="30" color='#424242'/></button>
             <Flex text_align='center' >{like}</Flex>
            </Flex>
         </Container>
       <Container display='block' margin_left='48px' margin_right='48px' >
         <Text marginbuttom='4px' fontsize= '16px' font_weight= 'bold' >
           카메스시 좋아요
         </Text>
         <Text marginbuttom='12px' fontsize= '13px' color='#808080'>
        방문날짜:4월7일
        </Text>
        <Text>올해 갔다왔었는데 맛있었습니다</Text>
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