import "./App.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/about/Header";
import About from "./components/about/About";
import Applications from "./components/applications/Applications";
import Games from "./components/games/Games";
import Footer from "./components/footer/Footer";

//Media queries to fix the margins on the nav bar
// Make a card that shows the projects.
// Make 2 of the cards a sliding game and the tic tac toe game.
// The third one have it as durak
// Make a contact page

function App() {
  return (
    <div className="app">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <div className="app-container">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Games></Games>
        <Applications></Applications>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
