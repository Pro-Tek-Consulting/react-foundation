const PersonalTable = (props) => {
	const { user } = props;
	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Gender</th>
				<th>Age</th>
			</tr>
			<tr>
				<td>
					{user.firstName}
					{user.lastName}
				</td>
				<td>{user.gender}</td>
				<td>{user.age}</td>
			</tr>
		</table>
	);
};

export default PersonalTable;
