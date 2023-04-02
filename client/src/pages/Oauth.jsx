import { React, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useIsLoginStore } from '../store/loginstore';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Oauth = () => {
	const [searchParams] = useSearchParams();
	const { isLogin, setIsLogin } = useIsLoginStore((state) => state);
	const navigate = useNavigate();

	useEffect(() => {
		const accessToken = searchParams.get('access_token');
		const refreshToken = searchParams.get('refresh_token');
		if (accessToken && refreshToken) {
			localStorage.setItem('accessToken', accessToken);
			localStorage.setItem('refreshToken', refreshToken);
			setIsLogin(true);
		}
	}, []);

	const getUserInfo = () => {
		const accessToken = localStorage.getItem('accessToken');
		const headers = {
			Authorization: `Bearer ${accessToken}`,
		};
		return axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/login/oauth2`, {
			headers,
		});
	};

	const getUserInfoOnSuccess = (response) => {
		localStorage.setItem('userInfoStorage', JSON.stringify(response.data));
		localStorage.setItem('token', response.headers.get('accesstoken'));
		navigate('/main');
	};

	useQuery({
		queryKey: ['getUserInfo'],
		queryFn: getUserInfo,
		enabled: isLogin,
		onSuccess: getUserInfoOnSuccess,
	});

	return <></>;
};

export default Oauth;
