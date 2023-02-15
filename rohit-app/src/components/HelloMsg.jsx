const HelloMsg = (props) => {
  const { data } = props;

  return <h1>Hello, {data.firstname}</h1>;
};

export default HelloMsg;
