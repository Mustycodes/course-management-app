import * as types from "../actions/actionTypes";
import { Course, initialState } from "./initialState";

interface CreateCourse {
  type: "CREATE_COURSE";
}
interface CreateCourseSuccess {
  type: "CREATE_COURSE_SUCCESS";
}
interface UpdateCourseSuccess {
  type: "UPDATE_COURSE_SUCCESS";
}
interface LoadCoursesSuccess {
  type: "LOAD_COURSES_SUCCESS";
  payload: [];
}

type CoursesAction =
  | CreateCourse
  | CreateCourseSuccess
  | UpdateCourseSuccess
  | LoadCoursesSuccess;

const courseReducer = (
  state: Course[] = initialState.courses,
  action: CoursesAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default courseReducer;
