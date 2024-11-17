import {
  getAuth,
  signInWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";

const auth = getAuth();

export default function signIn(payload) {
  if (payload) {
    const { email, password } = payload;
    try {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          //Signed in
          console.log("signed in using creds");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    try {
      signInAnonymously(auth)
        .then(() => {
          //Signed in
          console.log("singed in anonymously");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  }
}
