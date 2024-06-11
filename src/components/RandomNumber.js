import { React } from 'react';
import randomManager from '../services/randomManager';
const RandomNumber = (context) => {
	const {
		state: { number },
		actions: { setNumber },
	} = context;

	return <div>
		<h3>generate the random numbers: { number }</h3>
		<button onClick={ () => setNumber(randomManager.randomNumber()) }>
			Generate</button>
	</div>;
};

export default RandomNumber;
