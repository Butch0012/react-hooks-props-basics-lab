
import React from "react";

// Defining a functional component named Links, which takes github and linkedin as props.
const Links = ({ github, linkedin }) => {
  // Inside this component, we return JSX, which describes the structure of our links.

  return (

    <div>
      {/* Adding a heading with the text "Links" */}
      <h3>Links</h3>

      {/* Creating a link (anchor element) to the GitHub profile using the provided GitHub URL */}
      <a href={github}>
        {github}
      </a>

      {/* Creating a link to the LinkedIn profile using the provided LinkedIn URL */}
      <a href={linkedin}>
        {linkedin}
      </a>
    </div>
  );
}

// Exporting the Links component as the default export from this module.
export default Links;
