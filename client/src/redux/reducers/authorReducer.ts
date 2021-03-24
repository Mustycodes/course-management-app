import * as types from "../actions/actionTypes";
import { Author, Action } from "../actions/authorActions";
import { initialState } from "./initialState";
const authorReducer = (state: Author[] = initialState.authors, action:Action) => {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.payload
    default:
      return state;
  }
};
export default authorReducer;
