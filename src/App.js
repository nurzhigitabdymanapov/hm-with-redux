import "./App.css";
import { Provider } from "react-redux";
import { store } from "./calculator/store";
import { Header } from "./calculator/components/Header";
import { Headers } from "./todos/components/Headers";
import { storeTodos } from "./todos/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />  
      </Provider>
      <Provider store={storeTodos}>
        <Headers />
      </Provider>
    </div>
  );
}

export default App;
