import React from 'react';
import styled from 'styled-components';

import {AiFillStar} from 'react-icons/ai' //채워진별
import {AiOutlineStar} from 'react-icons/ai' //안채워진별

const Card = styled.div`

	

`
const Star = () => {
	return <Card>
      <AiFillStar size='15' color='#FD8E0D'/>
      <AiFillStar size='15' color='#FD8E0D'/>
      <AiFillStar size='15' color='#FD8E0D'/>
      <AiFillStar size='15' color='#FD8E0D'/>
      <AiOutlineStar size='15' color='#FD8E0D'/>
    </Card>;
};

export default Star;