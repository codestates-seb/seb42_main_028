import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<GlobalStyle>
					<div className='App'></div>
				</GlobalStyle>
			</Router>
		</>
	);
}

export default App;
