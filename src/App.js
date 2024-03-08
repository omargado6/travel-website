import React from "react";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import HomePage from "./pages/HomePage.js";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
