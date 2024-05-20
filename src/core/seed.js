import config from './config';
import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	count: config.countStart,
	refreshID: rndString(refreshIDLength),
	shape: 'square',
	number: '',
	boxCount: '1',
	boxesArray: [0, 0, 0, 0, 0],
};

export default seed;
