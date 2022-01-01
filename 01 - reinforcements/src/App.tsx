import React from "react";
import Counter from "bases/Counter";
import CounterBy from "bases/CounterBy";
import CounterEffect from "bases/CounterEffect";
import CounterHook from "bases/CounterHook";
import CounterReducer from "bases/CounterReducer";
import CounterReducerRefactored from "reducers/counter/CounterReducer";

function App() {
  return (
    <>
      <h1>React</h1>
      <Counter />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
      <CounterReducerRefactored />
    </>
  );
}

export default App;
