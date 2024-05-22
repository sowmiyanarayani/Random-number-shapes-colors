import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	shape: 'square',
	number: 0,
	boxCount: 0,
	boxesArray: [],
	color: '#FFFFFF',
};

export default seed;
