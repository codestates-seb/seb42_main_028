import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Reviewcard from './Reviewcard';
import Card from './card';
import Card2 from './card2';
import Star from '../../components/Star';
import Reviewlist from '../Review/Reviewlist';
import DefaultReviewCard from './DefaultReviewCard';
import Kame from '../../assets/food.png';
import Kame2 from '../../assets/카메스시.png';
import Kame3 from '../../assets/카메스시2.png'
import Kame4 from '../../assets/카메스시 위치.png'

import { useUserInfoStore } from '../../store/userInfo';
import { useIsLoginStore } from '../../store/loginstore';

import 이미지 from '../../assets/default.jpg'

// import {AiOutlineSearch} from 'react-icons/ai'

const ReviewPage = styled.div`
   /* justify-content: center;
   justify-items: center;
   align-items: center; */
   display: flex;
`
const TittleContainer=styled.div`
/* display: block; */
/* margin-bottom: 28px; */
`
const Review= styled.div`
   margin-top: 150px;
   min-width: 350px;
   /* width: 1000px; */
   /* border: solid 1px red; */
   padding: 8px;
`
const TittleText=styled.div`
   font-size:22px;
   font-weight: bold;
`
const Container=styled.div`
   display: flex;
   /* margin-right: 8px; */
   margin-bottom: 8px;
   /* align-items: ; */
`
const ImgContainer=styled.div`
display: flex;
/* margin-right: 8px; */
margin-bottom: 8px;
/* align-items: ; */
flex-direction: column;
margin-right: 8px;
@media screen and (max-width: 500px){
   flex-direction: row;
}
`
const Img = styled.img`
   width: 150px;
   height: 186px;
   background-color: #424242;
   margin-bottom: 8px;
`
const Button = styled.button`
   box-shadow: 0px 1px 2px 2px rgb(0,0,0,0.2);
   cursor: pointer;
   font-size: 14px;
   width: 60px;
   height: 33px;
   border-radius: 10px;
   color:${(props) => props.color };
   text-align: center;
   background-color: ${(props) => props.background_color || '#FD8E0D' };
   margin-right: ${(props) => props.margin_right };
   white-space: nowrap;
`
const MainImg = styled.img`
   min-width: 360px;
   width: 40%;
   height: 380px;
   margin-right: 8px;
   background-color: #424242;
`
const MapImg=styled.img`
   width: 63%;
   /* max-width:700px ; */
   /* max-width:360px ; */
   height: 280px;
`
const Text = styled.div`
   margin-bottom: 32px;
   cursor: pointer;
   text-decoration:underline;
   font-size: 14px;
`
const Search = styled.input`
   padding-left: 12px;
   min-width: 300px;
   max-width: 700px;
   width: 100%;
   height: 36px;
   border-radius: 10px;
   border: 1px solid #D9D9D9;
   /* margin-right: 20px; */
   cursor: default;
`
const Media=styled.div`
display: flex;
@media screen and (max-width: 500px){
    flex-direction: column;
}
`

function Reviewpage() {
   const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
  const [errorMessage, setErrorMessage] = useState('');
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(1);
  const [reviewList, setReviewList] = useState([]);

   const navigate=useNavigate();

   const PAGE_SIZE = 5;

   const fetchList = async () => {
      if (!page) {
         return;
      }

      await axios
         .get(`${process.env.REACT_APP_SERVER_URL}/reviews?page=${page}&size=${PAGE_SIZE}`)
         .then((res) => {
            const newList = res?.data?.data || [];
            setReviewList((curr) => ([...curr, ...newList]));
            setMaxPage(res?.data?.pageInfo?.totalPages || maxPage);
         });
   };

   const handleLoadMore = () => {
      setPage(page + 1);
   };

   useEffect(() => {
      handleLoadMore();
   }, []);

   useEffect(() => {
      fetchList();
   }, [ page ]);

   //axios
//    const reviewwriteHandler = () => {
//    axios
//      .get(
//        'http://localhost:3000/reviewwrite',
//      )
//      .then(res => {
//        setIsLogin(true);
//       //  localStorage.removeItem('token');
//        console.log(res.data);
//        navigate('/reviewwrite');
//      })
//      .catch(err => {
//        if (err.response.status === 401) {
//          setErrorMessage('실패');
//          console.log(errorMessage);
//        }
//      });
//  };
	return <div>
		<ReviewPage>
			<Review>
			{/* <Reviewwrite/> */}
			<TittleContainer >
            <TittleText>
				카메스시
			   </TittleText>
			   <Text>
				<Star/>
			   </Text>
			   <Text >
				리뷰쓰기
			   </Text>
			</TittleContainer>

			<Container>
         <Media>
				<MainImg src={Kame} style={{flexGrow:1}}/>
            {/* <Media> */}
				<ImgContainer>
				 <Img src={Kame2} style={{flexGrow:1}} />
				 <Img src={Kame3} style={{flexGrow:1}}/>
				</ImgContainer>
            <Card/>
            </Media>
			</Container>
			<div >
         <Media>
				<MapImg src={Kame4}style={{marginRight:'8px'}}/>
				<Card2/>
         </Media>
			</div>

			<Container style={{marginTop:'40px'}} >
			    <TittleText >
				리뷰
			   </TittleText>
			</Container>
			<Container style={{justifyContent:'space-between'}}>
			 <Search placeholder='로그인 후 리뷰 작성이 가능합니다' type='text' readOnly />
			 <div>
			  {isLogin && (
            <Button onClick={() => navigate('/reviewwrite')} background_color='white' margin_right='4px'>
               리뷰쓰기
            </Button>
           )}
			 <Button style={{flex:2}}>
				정렬
			 </Button>
			 </div>
			</Container>
         {reviewList.map((review) =>
            <Reviewcard key={review.reviewId} review={review} />
         )}
         {maxPage > page && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <Button style={{ margin: '60px auto 30px' }} onClick={handleLoadMore}>
                  더보기
               </Button>
            </div>
         )}
            {/* <DefaultReviewCard/> */}
         <Reviewlist/>
          </Review>
		</ReviewPage>
		
		</div>;
}

export default Reviewpage;
