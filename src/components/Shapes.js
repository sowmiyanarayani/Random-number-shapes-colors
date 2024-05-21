import { React } from 'react';
import SelectShapes from './SelectShapes';
import { peek } from '@laufire/utils/debug';
const Shapes = (context) => {
	const {
		config: { shapeStyles },
		state: { shape },
	} = context;

	peek(shape);
	return <div>
		<div style={ { ...shapeStyles[shape] } }/>
		<SelectShapes { ...context }/>
	</div>;
};

export default Shapes;
