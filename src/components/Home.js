import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
