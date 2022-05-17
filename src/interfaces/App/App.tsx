import Header from "../../components/header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Games from "../Games/Games";
import "./App.scss";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Games />
    </div>
  );
}

export default App;
