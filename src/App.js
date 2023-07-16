import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";



function App() {
  return (

    // hindi mo sila lahat icocode dito gagawa ka ng separate file kunwari for navbar, then separate din yung 
    // gilid na components

    <div className="App">

      {/* Navbar component */}
      <Navbar />
      <Homepage />

    </div>

  );
}

export default App;
