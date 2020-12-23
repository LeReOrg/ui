import {
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  FACEBOOK_SIGN_IN_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_OUT_START,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  CHECK_USER_SESSION,
} from "../types";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});
export const faceBookSignInStart = (emailAndPassword) => ({
  type: FACEBOOK_SIGN_IN_START,
  payload: emailAndPassword,
});
export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredenticals) => ({
  type: SIGN_UP_START,
  payload: userCredenticals,
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});
export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: SIGN_OUT_START,
});

// export const emailSignInSuccess = (user) => ({
//     type: EMAIL_SIGN_IN_SUCCESS,
//     payload : user

// });

// export const emailSignInFailure = error => ({
//     type: EMAIL_SIGN_IN_FAILURE,
//     payload : error
// });