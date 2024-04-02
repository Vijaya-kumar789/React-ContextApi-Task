import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./Header";
function App() {
  return (
    <>
      <div className = "container mt-5">
        <Header />
        <div className="container mt-4">
          <div className = "row">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
