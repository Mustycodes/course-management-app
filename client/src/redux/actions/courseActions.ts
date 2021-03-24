import axios from "axios";
import { LOAD_COURSES_SUCCESS } from "./actionTypes";
import { apiCallFailed, beginApiCall } from "./apiCallActions";

export type Course = {
  id: number;
  title: string;
  url: string;
  authorId: number;
  category: string;
};

export const loadCoursesSuccess = (courses: Course[]) => ({
  type: LOAD_COURSES_SUCCESS,
  payload: courses,
});

export interface Action {
  type: string;
  payload?: Course[];
}

type Dispatch = (arg: Action) => void;

export const fetchCourses = () => {
  return (dispatch: Dispatch) => {
    dispatch(beginApiCall());
    axios
      .get("http://localhost:8000/courses")
      .then((response) => {
        console.log(response.data);
        dispatch(loadCoursesSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(apiCallFailed());
      });
  };
};
