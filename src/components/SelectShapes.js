import { React } from 'react';
const SelectShapes = ({
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

export default SelectShapes;
