import { State } from "reducers/counter/interfaces/interfaces";
import { CounterAction } from "reducers/counter/actions/actions";

export default function (state: State, action: CounterAction): State {
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