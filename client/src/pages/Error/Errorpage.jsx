import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
margin-bottom: ${(props) => props.margin_buttom };
font-size: ${(props) => props.font_size || '14px' };
font-weight:  ${(props) => props.font_weight };
color:${(props) => props.color }; ;
`
const Button = styled.button`
box-shadow: 0px 1px 1px 1px rgb(0,0,0,0.2);
cursor: pointer;
font-size: 12px;
	width: 47px;
	height: 24px;
	border-radius: 10px;
	color:${(props) => props.color }; 
    margin-right:${(props) => props.margin_right };
	background-color: ${(props) => props.background_color || '#FD8E0D' };

`
function Errorpage() {
	return 
	<>
	<Text>"요청하신 페이지를 찾을 수 없습니다"</Text>
	<Button></Button>
	</>
}

export default Errorpage;
