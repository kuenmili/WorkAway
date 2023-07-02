import firebaseConfig from './firebase-config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import axios from 'axios';
import { auth } from './firebase-config'

 if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const uploadImage = file => {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    const task = fileRef.put(file);
    return task;
};


export const onAuthStateChanged = onChange => {
    return firebase
    .auth()
    .onAuthStateChanged(user => {
        if (user) {
            console.log(user)
             function getUser() {
                axios.get(`http://localhost:3001/users/${user.uid}`)
                .then(res => {
                    console.log(res.data)
                    if (!res.data?.uid) {
                        return getUser();
                    }
                    onChange({
                        loggedIn: true,
                        uid: res.data.uid,
                        first_name: res.data.first_name,
                        last_name: res.data.last_name,
                        email: res.data.email,
                        profile_image: res.data.profile_image,
                        password: res.data.password,
                        cellphone_number: res.data.cellphone_number,
                        reviews: res.data.reviews,
                        reserves: res.data.reserve_id
                    });
                })
                .catch(error => console.log(error.message))
            }
            return getUser();
        } 
        else {
            onChange(null);
        }
    });
};

export const signUp = (email, password, profile_image, first_name, last_name, cellphone_number) => {
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
        axios.post('http://localhost:3001/users/signup', {
            first_name,
            last_name, 
            email,
            profile_image,
            cellphone_number,
            password,
        })
        .then( res => {
            return user
        })
        .catch(error => console.log(error.message))
    })
}

export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
    return firebase.auth().signOut();
}

export const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return firebase
      .auth()
      .signInWithPopup(provider)
     .then(user => {
        console.log(user);
      axios
      .get(`http://localhost:3001/users/${user.user.uid}`)
      .then(res => {
        console.log(res, 'esto es res');
        if(res.data){
            console.log(res.data)
          return user
        } else {

            const newUser = {
                first_name : user.user.displayName,           
                email: user.user.email,
                profile_image: user.user.photoURL.replaceAll('s96-c', 's1080-c'),
                id: user.user.uid
            }
            console.log("esto es newUser");
            console.log(newUser);
          axios
          .post("http://localhost:3001/users/signup", newUser)          
          .then(res => {
            return user
          })
          .catch(error => console.log(error.message))
        }
    })
})
}

