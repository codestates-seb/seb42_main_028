import React from 'react';
import styled from 'styled-components';

import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'

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