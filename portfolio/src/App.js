import "./App.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/about/Header";
import About from "./components/about/About";
import Applications from "./components/applications/Applications";
import Games from "./components/games/Games";

//Media queries to fix the margins on the nav bar
// Make a card that shows the projects.
// Make 2 of the cards a sliding game and the tic tac toe game.
// The third one have it as durak

// Write a message positioned underneath the cards that also has a link to contact page
// Make a footer with blue background
// In footer include all the links to ur linkedin, github, email
// Make a contact page

function App() {
  return (
    <div className="app-container">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Applications></Applications>
      <Games></Games>
    </div>
  );
}

export default App;
