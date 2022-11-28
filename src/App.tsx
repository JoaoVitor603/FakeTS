import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { TSRoutes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <TSRoutes />
    </BrowserRouter>
  );
}

export default App;
