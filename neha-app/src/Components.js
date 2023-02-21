import "./App.css";
import HelloMsg from "./components/HelloMsg";
import PersonalTable from "./components/PersonalTable";
import Link from "./components/Link";

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
		</div>
	);
	return element;
}
export default App;
