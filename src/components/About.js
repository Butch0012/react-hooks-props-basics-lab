
import React from "react";
import Links from "./Links.js";

// Defining a functional component named About, which takes bio and links as props.
const About = ({ bio, links }) => (
  // Wrapping the component content in a <div> with the id "about" for styling or identification purposes.
  <div id="about">
    {/* Adding a heading with the text "About Me" */}
    <h2>About Me</h2>

    {/* Conditionally rendering a <p> tag if the bio prop is provided and truthy */}
    { bio && <p>{bio}</p> }

    {/* Inserting an image with a specific source URL and alt text */}
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

    {/* Rendering the Links component and passing github and linkedin props to it */}
    <Links
      github={links.github}
      linkedin={links.linkedin}
    />
  </div>
);

// Exporting the About component as the default export from this module.
export default About;
