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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path='/' element={<Landingpage />} />
				<Route path='/main' element={<Mainpage />} />
				<Route path='/login' element={<Loginpage />} />
				<Route path='/signup' element={<Signuppage />} />
				<Route path='/mypage' element={<Mypage />} />
				<Route path='/review' element={<Reviewpage />} />
				<Route path='/admin' element={<Adminpage />} />
				<Route path='/reviewwrite' element={<Reviewwrite />} />
				<Route path='404' element={<Errorpage />} />
			</Routes>
		</Router>
	);
}

export default App;
