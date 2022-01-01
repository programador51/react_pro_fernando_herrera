import React, { useReducer } from "react";

interface Props {
  /**
   * Initial number for the counter when it renders
   */
  initialValue?: number;
}

interface State {
  /**
   * Current number of the counter
   */
  counter: number;

  /**
   * Previous number of the counter on before was clicked
   */
  previous: number;

  /**
   * Number of clicked times on the button to increase the counter
   */
  clickedTimes: number;
}

const INITIAL_STATE: State = {
  counter: 0,
  previous: 0,
  clickedTimes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

function counterReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        counter: 0,
        clickedTimes: 0,
        previous: 0,
      };

    case "increaseBy":
      const { value } = action.payload;
      const { counter, clickedTimes } = state;

      return {
        ...state,
        counter: counter + value,
        previous: counter,
        clickedTimes: clickedTimes + 1,
      };

    default:
      return state;
  }
}

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
      <h1>Counter reducer {counter}</h1>

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
