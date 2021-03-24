import axios from "axios";
import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";
import { apiCallFailed, beginApiCall } from "./apiCallActions";

export type Author = {
  id: number,
  name: string
}

export const loadAuthorsSuccess = (authors: Author[]) => ({
  type: LOAD_AUTHORS_SUCCESS,
  payload: authors,
});

export interface Action {
  type: string;
  payload?: Author[];
}

type Dispatch = (arg: Action) => void;

export const fetchAuthors = () => {
  return (dispatch: Dispatch) => {
    dispatch(beginApiCall());
    axios.get("http://localhost:8000/authors")
      .then((response) => {
        console.log(response.data);
        dispatch(loadAuthorsSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(apiCallFailed());
      });
  };
};
