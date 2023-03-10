import GlobalStyle from './GlobalStyle';
import Landingpage from './pages/Landingpage';
import Mainpage from './pages/Main/Mainpage';
import Loginpage from './pages/Login/Loginpage';
import Signuppage from './pages/Login/Signuppage';
import Mypage from './pages/Mypage/Mypage';
import Reviewpage from './pages/Review/Reviewpage';
import Adminpage from './pages/Review/Adminpage';
import Reviewwrite from './pages/Review/Reviewwrite';
import Errorpage from './pages/Error/Errorpage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<GlobalStyle />
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
