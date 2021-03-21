import * as types from "../actions/actionTypes";
import {initialState} from "./initialState";
import {Author} from './initialState'


type AuthorAction = {type: 'LOAD_AUTHORS_SUCCESS', payload:[]}

const authorReducer = (state:Author[] = initialState.authors, action:AuthorAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authorReducer;
