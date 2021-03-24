import { BEGIN_API_CALL, API_CALL_FAILED } from "./actionTypes";

export const beginApiCall = () => ({
  type: BEGIN_API_CALL,
});
export const apiCallFailed = () => ({
  type: API_CALL_FAILED,
});
