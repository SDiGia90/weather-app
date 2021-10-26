import './App.css';
import Search from "./Search";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
      <div
        className="card text-dark bg-warning mb-3"
        style={{ "max-width": "30rem", padding: "2rem" }}
      >
        <h1>Search city</h1>
        <br />
        <div>
          <Search />
        </div>
        <br />
        <div className="weather-info">
          <Temperature city="Tokyo" celsius={19} percentage={80} speed={15} />
        </div>
        <div className="weather-img">
          <div className="weather-icon">🌞</div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
