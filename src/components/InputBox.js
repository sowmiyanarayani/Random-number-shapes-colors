import { React } from 'react';

// eslint-disable-next-line max-lines-per-function
const InputBox = (context) => {
	const {
		state: { boxCount, boxesArray, shape },
		actions: { setBox, updateArray },
		config: { shapeStyles },
	} = context;

	return <div>
		<label>Enter The Number : </label>
		<input
			type="number"
			placeholder="enter the number"
			onChange={ (event) => setBox(event.target.value) }
		/>
		<button
			onClick={ () => updateArray(boxCount) }
		>click</button>
		{ boxesArray.map((box, index) =>
			<div
				key={ index }
				style={ { ...shapeStyles[shape] } }

			/>) }
	</div>;
};

export default InputBox;
