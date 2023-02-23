const HelloMsg = (props) => {
	const { user } = props;
	return (
		<div>
			<h1>
				Hello, {user.firstName}
				{user.lastName}
			</h1>
		</div>
	);
};
export default HelloMsg;
