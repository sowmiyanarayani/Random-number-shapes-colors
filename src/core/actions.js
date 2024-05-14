const increaseCount = ({ state, data }) => ({ count: state.count + data });
const setShape = ({ data }) => ({ shape: data });
const setNumber = ({ data }) => ({ number: data });
const actions = { increaseCount, setShape, setNumber };

export default actions;
