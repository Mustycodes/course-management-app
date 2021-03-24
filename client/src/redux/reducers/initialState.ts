import { Course } from "../actions/courseActions";
import { Author } from "../actions/authorActions";

interface ApiCallStatus {
  isLoading: boolean;
  isError: boolean;
}

export interface State {
  apiCalls: ApiCallStatus;
  courses: Course[];
  authors: Author[];
};

export const initialState: State = {
  apiCalls: { isLoading: false, isError: false },
  courses: [],
  authors: [],
};