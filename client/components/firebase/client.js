import firebaseConfig from './firebase-config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import axios from 'axios';

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);


export const uploadImage = file => {
    const storageRef = firebase.storage().ref(`images/${file.name}`);
    const fileRef = storageRef.child(file.name);
    const task = fileRef.put(file)
    return task;
};
