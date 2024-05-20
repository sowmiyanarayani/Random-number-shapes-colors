import { React } from 'react';
import './App.scss';
import InputBox from './components/InputBox';
import RandomShapes from './components/RandomShapes';

const App = (context) =>
	<div className="App">
		<center>
			<InputBox { ...context }/>
			<RandomShapes { ...context }/>
		</center>
	</div>;

export default App;
