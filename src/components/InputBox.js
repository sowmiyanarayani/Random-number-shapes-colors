import { React } from 'react';

const InputBox = (context) => {
	const {
		state: { number },
		actions: { setNumber },
	} = context;

	return <div>
		<label>Enter The Number : </label>
		<input
			type="number"
			placeholder="enter the number"
			value={ number }
			onChange={ (event) => setNumber(event.target.value) }
		/>
		<button>click </button>
	</div>;
};

export default InputBox;
