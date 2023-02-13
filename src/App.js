import logo from "./logo.svg";
import "./App.css";
import WordScramble from "./components/word-scramble/word-scramble";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Aditi code's <span className="small"> with</span>
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <WordScramble />
      </main>
    </div>
  );
}

export default App;
