import { React } from 'react';
import randomManager from '../services/randomManager';
const RandomColors = (context) => {
	const {
		state: { color },
		actions: { setColors },
	} = context;

	return <div>
		<h3>generate the random colors: { color }</h3>
		<div
			className="card"
			style={ {
				backgroundColor: `#${ color }`, border: '1px solid black',
				height: '20vh', width: '20vh',
			} }
		/>
		<button onClick={ () => setColors(randomManager.randomColor()) }>
			Generate colors</button>
	</div>;
};

export default RandomColors;
