import { React } from 'react';
import RandomShapes from './RandomShapes';
import { peek } from '@laufire/utils/debug';
const Shapes = (context) => {
	const {
		config: { shapeStyles },
		state: { shape },
	} = context;

	peek(shape);
	return <div>
		<div style={ { ...shapeStyles[shape] } }/>
		<RandomShapes { ...context }/>
	</div>;
};

export default Shapes;
