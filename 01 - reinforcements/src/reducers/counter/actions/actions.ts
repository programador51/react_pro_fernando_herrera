export type CounterAction =
    | { type: "increaseBy"; payload: { value: number } }
    | { type: "reset" };

export const doReset = (): CounterAction => ({
    type: 'reset'
})

/**
 * Increase the value of the counter
 * @param increaseBy - Number to increase the number
 * @returns {CounterAction}
 */
export const doIncreaseBy = (increaseBy: number): CounterAction => ({
    type: 'increaseBy',
    payload: {
        value: increaseBy
    }
})