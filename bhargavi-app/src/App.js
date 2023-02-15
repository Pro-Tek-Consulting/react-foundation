import logo from "./logo.svg";
import "./App.css";

function App() {
	const data = {
		firstname: "bhargavi",
		lastname: "mupparaju",
		age: 25,
		gender: "female",
	};

	return (
		<div>
			<h1> Hello, {data.firstname}</h1>
			<table>
				<tr>
					<th>First name</th>
					<th>Lastname</th>
					<th>Age</th>
					<th>Gender</th>
				</tr>

				<tr>
					<td>{data.firstname}</td>
					<td>{data.lastname}</td>
					<td>{data.age}</td>
					<td>{data.gender}</td>
				</tr>
			</table>
		</div>
	);
}

export default App;
