import React from "react";
import Counter from "./components/Counter";
import counter from "./reducers";
import "./styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(counter);

export default function App() {
  return (
    <Provider store={store}>
      <h1>Counter Example with Redux</h1>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
    </Provider>
  );
}
