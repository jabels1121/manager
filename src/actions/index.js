import * as types from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return {
        type: types.EMAIL_CHANGED,
        payload: text
    }
};

export const passChanged = (text) => {
    return {
        type: types.PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        firebase.auth.signInWithEmailAndPassword(email, password)
            .then(user => console.log(user));
    };
};