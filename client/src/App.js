import GlobalStyle from './GlobalStyle';
import Landingpage from './pages/Landingpage.jsx';
import Mainpage from './pages/Main/Mainpage.jsx';
import Loginpage from './pages/Login/Loginpage.jsx';
import Signuppage from './pages/Login/Signuppage.jsx';
import Mypage from './pages/Mypage/Mypage.jsx';
import Reviewpage from './pages/Review/Reviewpage.jsx';
import Adminpage from './pages/Review/Adminpage.jsx';
import Reviewwrite from './pages/Review/Reviewwrite.jsx';
import Errorpage from './pages/Error/Errorpage.jsx';
import Header from './components/Header';
import Reviewlist from './pages/Review/Reviewlist';
import Card2 from './pages/Review/Reviewlist';
import Oauth from './pages/Oauth';
import Mywrite from './pages/Mywirte';

import Footer from './components/Footer';

import Layout from './layout/Layout';

import { useIsLoginStore } from './store/loginstore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import axios from 'axios';

const queryClient = new QueryClient();

function App() {
	const { setIsLogin } = useIsLoginStore((state) => state);

	useEffect(() => {
		if (localStorage.getItem('accesstoken')) {
			return setIsLogin(true);
		}
	}, [setIsLogin]);

	// const accessToken = localStorage.getItem('accessToken');
	// const refreshToken = localStorage.getItem('refreshToken');

	// useEffect(() => {
	// 	if (refreshToken) {
	// 		setIsLogin(true);
	// 		axios
	// 			.get(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Authorization: `Bearer ${accessToken}`,
	// 					Refresh: refreshToken,
	// 				},
	// 			})
	// 			.then((response) => {
	// 				localStorage.setItem(
	// 					'accessToken',
	// 					response.headers.get('Authorization').split(' ')[1],
	// 				);
	// 			});
	// 	}
	// }, []);

	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route path='/' element={<Landingpage />} />
					<Route path='/reviewwrite' element={<Reviewwrite />} />
				</Routes>
				<Layout>
					<Routes>
						<Route path='/main' element={<Mainpage />} />
						<Route path='/login' element={<Loginpage />} />
						<Route path='/signup' element={<Signuppage />} />
						<Route path='/mypage' element={<Mypage />} />
						<Route path='/review' element={<Reviewpage />} />
						<Route path='/admin' element={<Adminpage />} />
						{/* <Route path='/reviewwrite' element={<Reviewwrite />} /> */}
						<Route path='/auth/google/callback' element={<Oauth />} />
						<Route path='404' element={<Errorpage />} />
						<Route path='test' element={<Card2 />} />
						<Route path='/mywrite' element={<Mywrite />} />
					</Routes>
				</Layout>
				<Footer />
			</Router>
		</QueryClientProvider>
	);
}

export default App;
