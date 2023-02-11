import "./App.css";
import AppRouter from "./AppRouter";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <AppRouter>
        <Home />
      </AppRouter>
    </div>
  );
}

export default App;
