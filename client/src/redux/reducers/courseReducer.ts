
// type CoursesAction =
//   | CreateCourse
//   | CreateCourseSuccess
//   | UpdateCourseSuccess
//   | LoadCoursesSuccess;


import * as types from '../actions/actionTypes'
import { Action, Course } from '../actions/courseActions';
import { initialState } from "./initialState";
const courseReducer = (state:Course[] = initialState.courses, action:Action) => {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.payload;
    default:
    return state;
  }
}
export default courseReducer;
