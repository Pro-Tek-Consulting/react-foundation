import React from "react";

export default function Listing(props) {
  const { data } = props;
  return (
    <ul>
      {data.map((ele) => {
        return (
          <li key={ele.id}>
            <h1>{ele.title}</h1>
            <h3>{ele.content}</h3>
          </li>
        );
      })}
    </ul>
  );
}
