import { React } from 'react';

// eslint-disable-next-line max-lines-per-function
const GenerateShapes = (context) => {
	const {
		state: { number, boxesArray, shape },
		actions: { updateArray },
		config: { shapeStyles },
	} = context;

	return <div>
		<button
			onClick={ () => updateArray(number) }
		>generate shapes</button>
		{ boxesArray.map((box, index) =>
			<div
				key={ index }
				style={ { ...shapeStyles[shape] } }
			/>) }
	</div>;
};

export default GenerateShapes;
