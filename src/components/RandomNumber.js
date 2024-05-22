import { React } from 'react';
const RandomNumber = (context) => {
	const {
		state: { number },
		actions: { setNumber },
	} = context;
	const max = 10;
	const min = 1;
	const generateRandomNumber = Math.floor(Math.random()
				* (max - min + 1)) + min;

	return <div>
		<h3>generate the random numbers: { number }</h3>
		<button onClick={ () => setNumber(generateRandomNumber) }>
			Generate</button>
	</div>;
};

export default RandomNumber;
