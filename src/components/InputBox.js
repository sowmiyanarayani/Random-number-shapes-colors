import { peek } from '@laufire/utils/debug';
import { React } from 'react';

// eslint-disable-next-line max-lines-per-function
const InputBox = (context) => {
	const {
		state: { boxCount, boxesArray, shape },
		actions: { setBox, updateArray },
		config: { shapeStyles },
	} = context;

	peek(updateArray);
	return <div>
		<label>Enter The Number : </label>
		<input
			type="number"
			placeholder="enter the number"
			onChange={ (event) => setBox(event.target.value) }
		/>
		<button
			onClick={ () => updateArray(boxCount) }
		>generate shapes</button>
		{ boxesArray.map((box, index) =>
			<div
				key={ index }
				style={ { ...shapeStyles[shape] } }
			/>) }
	</div>;
};

export default InputBox;
