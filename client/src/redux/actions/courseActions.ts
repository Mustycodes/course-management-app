import * as types from "./actionTypes";
import axios from 'axios'

// Create action creators

export const createCourse = () => {
  return { type: types.CREATE_COURSE };
};
export const createCourseSuccess = () => {
  return { type: types.CREATE_COURSE_SUCCESS };
};
export const updateCourseSuccess = () => {
  return { type: types.UPDATE_COURSE_SUCCESS };
};
export const loadCoursesSuccess = (courses: []) => {
  return { type: types.LOAD_COURSES_SUCCESS, payload: courses };
};


// export const fetchCourses = async () => {
//   return (dispatch) => {
//     const response = axios.get('/api/courses');
//     const data = response.data;
//     dispatch(loadCoursesSuccess(data))
//   }
// }
