const Link = (props) => {
	return (
		<a style={{ color: "green" }} href={props.url}>
			{props.children}
		</a>
	);
};
export default Link;
