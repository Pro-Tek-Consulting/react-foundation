import "./App.css";
import HelloMsg from "./components/HelloMsg";
import PersonTable from "./components/PersonalTable";
import Link from "./components/Link";

function App() {
	const data = {
		firstname: "Josh",
		lastName: "Perez",
		gender: "Male",
		age: 30,
	};

	const Ele = (
		<div>
			<HelloMsg data={data} />
			<PersonTable data={data} />

			<Link url="google.com">Google</Link>
			<Link url="yahoo.com">Yahoo</Link>
			<Link url="bing.com">Bing</Link>

			<br />
		</div>
	);

	return Ele;
}

export default App;
