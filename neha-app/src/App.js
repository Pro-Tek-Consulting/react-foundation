import "./App.css";
import HelloMsg from "./components/HelloMsg";
import PersonalTable from "./components/PersonalTable";
import Link from "./components/Link";
import Counter from "./components/Counter";

function App() {
	const user = {
		firstName: "Neha",
		lastName: "Thakur",
		gender: "Female",
		age: 29,
	};

	const element = (
		<div>
			<HelloMsg user={user}></HelloMsg>
			<PersonalTable user={user}></PersonalTable>
			<Link url="google.com">Google</Link>
			<Counter startAt={4} />
		</div>
	);
	return element;
}
export default App;

// function App() {
// 	const user = {
// 		firstName: "Neha",
// 		lastName: "Thakur",
// 		gender: "Female",
// 		age: 29,
// 	};

// 	const element = (
// 		<div>
// 			<h3>
// 				Hello, {user.firstName} {user.lastName}!
// 			</h3>
// 			<table>
// 				<th>Name</th>
// 				<th>Gender</th>
// 				<th>Age</th>
// 				<tr>
// 					<td>
// 						{user.firstName} {user.lastName}
// 					</td>
// 					<td>{user.gender}</td>
// 					<td>{user.age}</td>
// 				</tr>
// 			</table>
// 			<a href="https://www.reactjs.org">Click Me!</a>
// 		</div>
// 	);

// 	return element;
// }

// export default App;
