const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });
const setNumber = ({ data }) => ({ number: data });
const setBox = ({ data }) => ({ boxCount: data });
const updateArray = ({ data }) =>
	({ boxesArray: new Array(Number(data)).fill(null) });
const actions = { increaseCount, setShape, setNumber, setBox, updateArray };

export default actions;
