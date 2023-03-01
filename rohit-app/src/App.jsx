import "./App.css";
import HelloMsg from "./components/HelloMsg";
import Listing from "./components/Listing";

function App() {
  const data = {
    firstname: "Josh",
    lastName: "Perez",
    gender: "Male",
    age: 30,
  };

  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];

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
      <Listing data={posts} />
    </div>
  );

  return Ele;
}

export default App;
