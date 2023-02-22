import Counter from "./Counter";

const HelloMsg = (props) => {
	const { data } = props;

	return (
		<div>
			<h1>Hello, {data.firstname}</h1>
			<Counter startAt={4} />
		</div>
	);
};

export default HelloMsg;
