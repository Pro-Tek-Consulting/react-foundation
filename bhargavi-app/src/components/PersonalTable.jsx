const PersonTable = (props) => {
	const { data } = props;
	return (
		<table>
			<th>Name</th> <th>Gender</th>
			<th>Age</th>
			<tr>
				<td>
					{data.firstname} {data.lastName}
				</td>
				<td>{data.gender}</td>
				<td>{data.age}</td>
			</tr>
		</table>
	);
};

export default PersonTable;
