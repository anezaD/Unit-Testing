import Greeding from "./components/Greedings";
import Async from "./components/Async";
import LetVarConst from "./JsTestsCodes/LetVarConst";
import CallBacks, { FixWithCallBackFunction } from "./JsTestsCodes/Callbacks";
import "./App.css";
import UsersList from "./components/Users/UsersList";

function App() {
  //LetVarConst();
  // CallBacks();
  FixWithCallBackFunction();

  return (
    <div>
      <Greeding />
      {/* <Async /> */}
      <UsersList />
      {/* <LetVarConst /> */}
    </div>
  );
}

export default App;
