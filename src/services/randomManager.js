const max = 2;
const min = 8;
const hexBase = 16;

const randomManager = {
	randomColor: () => Math.random().toString(hexBase)
		.substring(min, max),
	randomNumber: () => Math.floor(Math.random()
		* (max - min + 1)) + min,
};

export default randomManager;
