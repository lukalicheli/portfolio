import "./App.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/about/Header";
import About from "./components/about/About";

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
