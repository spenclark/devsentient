import "./App.css";
import Routing, { routes } from "./routing";
function App() {
  return (
    <div className="App">
      <Routing props={routes} />
    </div>
  );
}

export default App;
