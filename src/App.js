import { React } from 'react';
import './App.scss';
import InputBox from './components/generateShapes';
import RandomShapes from './components/SelectShapes';
import GenerateShapes from './components/RandomNumber';

const App = (context) =>
	<div className="App">
		<center>
			<InputBox { ...context }/>
			<RandomShapes { ...context }/>
			<GenerateShapes { ...context }/>
		</center>
	</div>;

export default App;
