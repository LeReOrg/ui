import { takeLatest, put,all,call } from 'redux-saga/effects'
import {GOOGLE_SIGN_IN_START,EMAIL_SIGN_IN_START,CHECK_USER_SESSION,SIGN_OUT_START,SIGN_UP_START,SIGN_UP_SUCCESS, FACEBOOK_SIGN_IN_START} from '../types'
import { auth , googleProvider, createUserProfileDocument ,getCurrentUser,facebookProvider} from '../firebase.config';
import { signInSuccess, signInFailure, signUpFailure,signUpSuccess, signOutFailure,signOutSuccess} from '../action/user_action'

export function* getSnapshotFromUserAuth(userAuth,additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument,userAuth,additionalData);
        const userSnapshot = yield userRef.get();  
        yield put(signInSuccess({id: userSnapshot.id,...userSnapshot.data}))
    } catch (error) {
        yield put(signInFailure(error));
    }
}


export function* singInWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error));
    }
}
export function* singInWithFaceBook(){
    try {
        const {user} = yield auth.signInWithPopup(facebookProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error));
    }
}
export function* signInWithEmail({payload :{email,password}}){
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure(error))
    }
}
export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess())

    } catch (error) {
        yield put(signOutFailure())
    }
}
export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield getSnapshotFromUserAuth(user,additionalData)
}


export function* signUp({payload: {email,password,displayName }}){
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,password
        );
        yield put(signUpSuccess({user,additionalData : { displayName }}))
    } catch (error) {
        yield put(signUpFailure(error))
    }
}

export function* onGoogleSignIn(){
    yield takeLatest(GOOGLE_SIGN_IN_START,singInWithGoogle);
}

export function* onEmailSignIn(){
    yield takeLatest(EMAIL_SIGN_IN_START,signInWithEmail)
}
export function* onFaceBookSignIn() {
  yield takeLatest(FACEBOOK_SIGN_IN_START, singInWithFaceBook);
}

export function* onCheckUserSession(){
    yield takeLatest(CHECK_USER_SESSION,isUserAuthenticated)
}

export function* onSignOutStart(){
    yield takeLatest(SIGN_OUT_START,signOut)
}
export function* onSignUpStart(){
    yield takeLatest(SIGN_UP_START,signUp)
}

export function* onSignUpSuccess(){
    yield takeLatest(SIGN_UP_SUCCESS,signInAfterSignUp)
}

function* userSagas(){
    yield all([call(onGoogleSignIn),call(onEmailSignIn),call(onFaceBookSignIn),
        call(isUserAuthenticated),call(onSignOutStart),call(onSignUpStart),
        call(onSignUpSuccess)])
}
export default userSagas;
