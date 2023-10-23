import "./App.css";
import { About } from "./Components/About/About";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Menu } from "./Components/Menu/Menu";
import { Navbar } from "./Components/Navbar/Navbar";
import { Where } from "./Components/Where/Where";
// import { SectionTitle } from "./Styled/SectionTitle/SectionTitle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Where />
      <Footer />
    </div>
  );
}

export default App;
