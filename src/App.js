import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero/Hero";
import Overview from "./components/Overview/Overview";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <Overview />
        <Join />
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
