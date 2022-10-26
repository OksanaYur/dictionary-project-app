import logo from "./dictionary-photo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"  />
       
       </header>
       <main>
        <Dictionary />
       </main>
    <footer className="text-center">
    Coded by {""}
    <a href="https://github.com/OksanaYur/dictionary-project-app" target="_blank">Oksana Yuriychuk</a>
    </footer>
       </div>
       </div>
  );
}


