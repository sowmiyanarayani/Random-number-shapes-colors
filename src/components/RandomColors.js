/* eslint-disable max-lines-per-function */
/* eslint-disable react/react-in-jsx-scope */
import { peek } from '@laufire/utils/debug';
const RandomColors = (context) => {
	const {
		state: { color },
		actions: { setColors },
	} = context;
	const generateRandomColors
		// eslint-disable-next-line no-magic-numbers
		= `#${ Math.floor(Math.random() * 16777215).toString(16) }` ;

	peek(color);
	// eslint-disable-next-line react/react-in-jsx-scope
	return <div>
		<h3>generate the random colors: { color }</h3>
		<div
			className="card"
			style={ {
				backgroundColor: color, border: '1px solid black',
				height: '20vh', width: '20vh',
			} }
		/>
		<button onClick={ () => setColors(generateRandomColors) }>
			Generate colors</button>
	</div>;
};

export default RandomColors;
