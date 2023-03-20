import { React, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useIsLoginStore } from '../store/loginstore';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Oauth = () => {
	const [searchParams] = useSearchParams();
	const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
	const navigate = useNavigate();
};

export default Oauth;
