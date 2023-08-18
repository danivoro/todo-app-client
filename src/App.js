import "./App.css";
import { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="Container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
