import "./App.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/about/Header";
import About from "./components/about/About";

//Media queries to fix the margins on the nav bar
// Bigger font on the nav buttons
// Make a big title that says Full Stack Web Developer in about section
// Delete "As a full stack developer" from about section
// Make a card that shows the projects. 
// Make 2 of the cards a sliding game and the tic tac toe game. 
// The third one have it as durak
// The bottom row will have fake instagram, todoapp, and third one (pick something)
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
    </div>
  );
}

export default App;
