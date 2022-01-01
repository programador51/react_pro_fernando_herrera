import React, { useReducer } from "react";
import { State } from "reducers/counter/interfaces/interfaces";
import counterReducer from "reducers/counter/reducer/reducer";

interface Props {
  /**
   * Initial number for the counter when it renders
   */
  initialValue?: number;
}

const INITIAL_STATE: State = {
  counter: 0,
  previous: 0,
  clickedTimes: 0,
};

export default function CounterComponent({ initialValue = 0 }: Props) {
  const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const increment = () =>
    dispatch({
      payload: {
        value: 1,
      },
      type: "increaseBy",
    });

  return (
    <>
      <h1>Counter reducer refactored {counter}</h1>

      <button onClick={increment}>+1</button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        Reiniciar
      </button>
    </>
  );
}
