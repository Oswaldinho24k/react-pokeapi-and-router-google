import firebase from 'firebase/app'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDgkR3-h37tPlJVmzImRlJzK_Gq0Mftkuw",
    authDomain: "iron-a8d8e.firebaseapp.com",
    databaseURL: "https://iron-a8d8e.firebaseio.com",
    projectId: "iron-a8d8e",
    storageBucket: "iron-a8d8e.appspot.com",
    messagingSenderId: "857271309319"
};
firebase.initializeApp(config);


export const createUser = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            return res
        }).catch(e => {
            return e
        })
}

export const logIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            return res
        }).catch(e => {
            return e
        })
}


