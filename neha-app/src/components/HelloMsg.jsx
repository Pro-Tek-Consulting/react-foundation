const HelloMsg = (props) => {
	const { user } = props;
	return (
		<h1>
			Hello, {user.firstName}
			{user.lastName}
		</h1>
	);
};
export default HelloMsg;
