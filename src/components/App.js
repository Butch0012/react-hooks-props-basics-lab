// Importing the React library, which helps us create components.
import React from "react";

// Importing the NavBar, Home, and About components from their respective files.
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Importing user data from a file named "user.js" located in the "../data" folder.
// This data will be passed down as props to child components.
import user from "../data/user";

// Printing the user data to the console just to see what it looks like.
console.log(user);

// Defining the main component of our app named App.
function App() {
  // Inside this component, we return JSX, which describes the structure of our user interface.

  return (
    // The whole app is wrapped in a <div> (a container) for organization.
    <div>
      {/* Rendering the NavBar component, which might be a navigation bar at the top of the app. */}
      <NavBar />

      {/* Rendering the Home component and passing user data as props. */}
      <Home
        city={user.city}
        color={user.color}
        username={user.name}
      />

      {/* Rendering the About component and passing user data as props. */}
      <About
        bio={user.bio}
        links={user.links}
      />
    </div>
  );
}

// Exporting the App component as the default export from this module.
export default App;
