import { createReducer, on, State } from "@ngrx/store";
import { decrement, increment, reset } from "../actions/counter.actons";

export const initalState = 0;

const _counterReducer = createReducer(initalState,
    on(increment, state => state + 1),
    on(decrement, state => state -1),
    on(reset, state => initalState)
);

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action);
}