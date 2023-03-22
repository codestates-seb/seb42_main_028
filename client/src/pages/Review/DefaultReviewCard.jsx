import React from 'react';
import styled from 'styled-components';

const Card=styled.div`
    width: 100%;
    height: 330px;
    /* position:static; */
    display: flex;
    justify-content: center;
    margin-top: 20px;
    align-items: center;
`
const DefaultReview=styled.div`
border-top:solid 1px #FD8E0D ;
display: flex;
padding: 10px 10px;
background-color: white;
width: 100%;
height:360px;
min-width: 150px;
justify-content: center;
align-items:center;

`
const Text=styled.div`
    font-size: 20px;
    color: gray;

`
function DefaultReviewCard(){
return <>
<Card>
 <DefaultReview>
    <Text>아직 등록된 리뷰가 없습니다</Text>
 </DefaultReview>
</Card>
</>


}
export default DefaultReviewCard;