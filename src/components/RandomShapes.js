import { React } from 'react';
const RandomShapes = ({
	actions: { setShape },
	config: { shapes },
}) =>
	<select
		onChange={ (event) => setShape(event.target.value) }
	>
		{ shapes.map((newValue, index) =>
			<option
				key={ index }
				value={ newValue }
			>
				{ newValue }
			</option>) }
	</select>
;

export default RandomShapes;
