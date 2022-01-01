export interface State {
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