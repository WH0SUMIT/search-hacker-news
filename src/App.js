import Home from "./components/pages/Home";
import ApiProvider from "./core/apiContext";

import "./css/global.scss";

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <Home />
      </ApiProvider>
    </div>
  );
}

export default App;
