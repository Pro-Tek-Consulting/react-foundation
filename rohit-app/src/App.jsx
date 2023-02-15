import "./App.css";
import HelloMsg from "./components/HelloMsg";

function App() {
  const data = {
    firstname: "Josh",
    lastName: "Perez",
    gender: "Male",
    age: 30,
  };

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

  const Link = (props) => {
    return (
      <a style={{ color: "green" }} href={props.url}>
        {props.children}
      </a>
    );
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
