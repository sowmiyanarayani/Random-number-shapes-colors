const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });
const setNumber = ({ data }) => ({ number: data });
const setBox = ({ data }) => ({ boxCount: data });
const updateArray = ({ data }) =>
	({ boxesArray: new Array(Number(data)).fill(1) });
const setColors = ({ data }) => ({ color: data });
const actions = {
	increaseCount,
	setShape, setNumber,
	setBox, updateArray, setColors,
};

export default actions;
