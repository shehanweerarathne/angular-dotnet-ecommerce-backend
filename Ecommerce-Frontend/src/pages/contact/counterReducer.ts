export interface CounterState{
    data:number;
}
const initialState:CounterState = {
    data:42
}
const counterReducer = (state = initialState,action:any) => {
  return state
}
export default counterReducer;