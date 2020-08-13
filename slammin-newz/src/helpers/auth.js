// authentication logic methods
import { auth } from '../services/firebase'
// two functions one for signup and one for signin using firebase
export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password)
}
export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password)
}
// function for signing up with google
export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider()
    return auth().signInWithPopup(provider)
}
// function for logging out
export function handleLogOut() {
    auth().signOut()
        .then(() => {
        })
}
// function for reset password
export function passwordReset(email) {
    auth().sendPasswordResetEmail(email)
        .then(() => {
        }).catch((error) => {console.log(error)})
}