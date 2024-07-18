import "./App.scss";
import useRouteElements from "./routes/routeElements";

function App() {
  const routeElements = useRouteElements();
  return <>{routeElements}</>;
}

export default App;
