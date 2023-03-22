import React, { useRef, useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {FaUserCircle} from 'react-icons/fa';

import 이미지 from '../../assets/default.jpg'

import { useUserInfoStore } from '../../store/userInfo';
import { useIsLoginStore } from '../../store/loginstore';

const Review = styled.div`
   position : absolute;
   top:0 ;
   left: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   background-color:  rgba(0,0,0,0.2);
`
const Modal = styled.div`
   position : relative;
   top:50px;
   padding: 10px;
   min-width: 380px;
   width: 37%;
   height:680px;
/* text-align: center; */
   padding :16px;
   background-color:  rgb(245, 245, 245);
   align-items:center;
   border-radius:10px;
   display: block;
   justify-content: center;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 10px;
`
const Text = styled.p`
   margin: 0;
   font-size: 14px;
   margin-bottom: 4px;
   text-align: left;
   padding-left:75px;
`
const Container = styled.div`
   margin : 16px 4px;
   text-align: center;
   align-items: center;
`
const Img=styled.img`
   min-width: 113px;
   width:25% ;
   height: 200px;
   border:solid 1px gray;
   color: gray;
/* background-color: gray; */
/* margin: auto; */
`
const Input=styled.input`
   width: 80%;
   min-width: 346px;
   height: 24px;
   margin-bottom:8px;
   padding-left: 8px;
   border-radius: 3px;
   border: 0.5px solid gray;
`
const Button = styled.button`
   box-shadow: 0px 1px 1px 1px rgb(0,0,0,0.2);
   cursor: pointer;
   font-size: 12px;
   width: 45px;
   height: 27px;
   border-radius: 10px;
   background-color: #FD8E0D; 
`
const UserID = styled.p`
   margin-left:8px;
   font-size: 15px;
   margin-bottom: 4px;
   align-items: center;
   justify-content: center;
   justify-items: center;
   font-weight: bold;
`
const StarContainer =styled.div`
   border-bottom: solid 1px gray;
   display: flex;
   flex-direction: row-reverse;
   justify-content: center;
`
const StarInput =styled.input`
   display: none;
	&:checked~label{
	text-shadow: 0 0 0 rgba(250, 208, 0, 0.99);
	}
`
const StarLabel=styled.label`
   cursor: pointer;
   color: transparent;
   text-shadow: 0 0 0 gray;
	&:hover {
		text-shadow: 0 0 0 rgba(250, 208, 0, 0.99)
		};
	&:hover~label{
		text-shadow: 0 0 0 rgba(250, 208, 0, 0.99);
	}
	
`

function Reviewwrite() {
const { userInfo } = useUserInfoStore(state => state);
const { isLogin } = useIsLoginStore(state => state);

const pathData = {
    content: '',
	title: '',
	tag:'',
    memberId: null,
	fileImg:''
};

const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [tag, setTag] = useState('');
const [date, setDate] = useState('');

const navigate = useNavigate();

const [fileImg,setFileimg] = useState(이미지);

//Handler
const titleHandlerChange = e => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };
const contentHandlerChange = e => {
    console.log(e.target.value);
    setContent(e.target.value);
  };
const tagHandlerChange = e => {
    console.log(e.target.value);
    setTag(e.target.value);
  };
const dateHandlerChange = e => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

//axios
const pathUserWriteData = async () => {
    const response = await axios
      .post('http://', pathData)
      .catch(error => {
        console.error(error);
      });
    if (response && response.data) {
      console.log(response);
    }
  };

//Submit
const handlerSubmit = e => {
    if (isLogin) {
      e.preventDefault();
      pathData.title = title;
      pathData.content = content;
      pathData.memberId = userInfo.memberId;
      const currentTime = new Date();
      pathData.createdAt = currentTime.toString();
      pathUserWriteData();
      console.log(
      'pathData',
       pathData.title,
       pathData.content
        
	      );
    } else {
      alert('You need to Login.');
      navigate('/login');
    }
  };


	// const [ previewImg, setPreviewImg ] = useState([]);

	// const insertImg = (e) => {
	// 	let reader = new FileReader()
	  
	// 	if(e.target.files[0]) {
	// 	  reader.readAsDataURL(e.target.files[0])
		  
	// 	  setFileimg([...fileImg, e.target.files[0]])
	// 	}
	  
	// 	reader.onloadend = () => {
	// 	  const previewImgUrl = reader.result
	  
	// 	  if(previewImgUrl) {
	// 		setPreviewImg([...previewImg, previewImgUrl])
	// 	  }
	// 	}
	//   }



	const saveFileImg=(e)=>{ //파일 저장
		setFileimg(URL.createObjectURL(e.target.files[0]));

	}

	// const deleteFileImg=()=>{ //파일 삭제
	// 	URL.revokeObjectURL(fileImg);
	// 	setFileimg('');
	// }

	return <Review>
	<Modal>
	<Container style={{display:'flex',paddingLeft:'74px'}}>
    <FaUserCircle size="60" color='#BDBDBD'/>
	<UserID >사용자아이디</UserID>
	</Container>
	<Container style={{display:'flex',justifyContent:'center'}}>
		
		<div>
		{
			
			fileImg && (
				<Img
				alt='simple'
				src={fileImg}
				style={{margin:'auto'}} 
				/>
			)
         }
		 <input
		  name='imgUpload'
         type='file'
		 accept='image/*'
		 onChange={saveFileImg} 
		  />
		 </div>
		 <div>
		{
			fileImg && (
				<Img
				alt='simple'
				src={fileImg}
				style={{margin:'auto'}} 
				/>
			)
         }
		 <input
		  name='imgUpload'
         type='file'
		 accept='image/*'
		 onChange={saveFileImg} 
		  />
		 </div>
		 <div>
		{
			fileImg && (
				<Img
				alt='simple'
				src={fileImg}
				style={{margin:'auto'}} 
				/>
			)
         }
		 <input
		  name='imgUpload'
         type='file'
		 multiple={true}
		 accept='image/*'
		 onChange={saveFileImg} 
		  />
		 </div>
		{/* <Img style={{marginRight:'4px'}} src={이미지}/>
		<Img style={{backgroundColor:'white',marginRight:'4px'}}src={이미지}/>
		<Img src={이미지}/> */}
	</Container>
	<StarContainer>
     <StarInput type='radio' name='star' value='5' id='5-star' />
	 <StarLabel for='5-star'>★</StarLabel>
	 <StarInput type='radio' name='star' value='4' id='4-star'/>
	 <StarLabel for='4-star'>★</StarLabel>
	 <StarInput type='radio' name='star' value='3' id='3-star'/>
	 <StarLabel for='3-star'>★</StarLabel>
	 <StarInput type='radio' name='star' value='2' id='2-star'/>
	 <StarLabel for='2-star'>★</StarLabel>
	 <StarInput type='radio' name='star' value='1' id='1-star'/>
	 <StarLabel for='1-star'>★</StarLabel>
	</StarContainer>
	<Container >
	<Input
	type='text' value={content} onChange={contentHandlerChange} maxLength="500"
	placeholder='이곳에 다녀온 경험을 자세히 공유해 주세요'style={{height:'100px',marginbottom: '12px',textAlign:'start'}}/>
	<Text>리뷰 제목을 달아주세요</Text>
	<Input type='text' value={title} onChange={titleHandlerChange} />
	<Text >방문한 날짜를 선택해주세요</Text>
	<Input type='date' value={date} onChange={dateHandlerChange}/>
	<Text >태그를 작성해주세요</Text>
	<Input value={tag} onChange={tagHandlerChange}/>
</Container>
<Container >
	<Button style={{backgroundColor:'white',marginRight:'8px'}}>취소</Button>
	<Button onClick={handlerSubmit}>게시</Button>
</Container>
	</Modal>

	</Review>
	
}

export default Reviewwrite;
