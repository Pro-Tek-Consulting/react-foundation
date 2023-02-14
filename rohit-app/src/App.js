import "./App.css";

function App() {
  const data = {
    firstname: "Josh",
    lastName: "Perez",
    gender: "Male",
    age: 30,
  };

  const ele = (
    <div>
      <h1>Hello, {data.firstname}</h1>

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
      <a href="google.com">Click Here</a>
      <br />
    </div>
  );

  return ele;
}

export default App;
