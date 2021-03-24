import { BEGIN_API_CALL, API_CALL_FAILED } from "../actions/actionTypes";
import { initialState } from "./initialState";
const apiCallReducer = (state = initialState.apiCalls, action: any) => {
  if (action.type.includes("SUCCESS")) {
    return {...state, isError: false, isLoading: false}
  }
  switch (action.type) {
    case BEGIN_API_CALL:
      return { ...state, isLoading: true };
    case API_CALL_FAILED:
      return { ...state, isError: true };
    default:
      return state;
  }
};
export default apiCallReducer;
