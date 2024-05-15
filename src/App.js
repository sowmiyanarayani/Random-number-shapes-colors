import { React } from 'react';
import './App.scss';
import InputBox from './components/InputBox';
import Shapes from './components/Shapes';
const App = (context) =>
	<div className="App">
		<center>
			<InputBox { ...context }/>
			<Shapes { ...context }/>
		</center>
	</div>;

export default App;
