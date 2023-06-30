import firebaseConfig from './firebase-config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import axios from 'axios';

 if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export const uploadImage = file => {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    const task = fileRef.put(file);
    return task;
};

export const onAuthStateChanged = onChange => {
    return firebase.auth().onAuthStateChanged(user => {
        if (user) {
            function getUser() {
                axios.get(`http://localhost:3001/users/${user.id}`).then(res => {
                    if (!res.data?.id) {
                        return getUser();
                    }
                    onChange({
                        loggedIn: true,
                        id: res.data.id,
                        first_name: res.data.first_name,
                        last_name: res.data.last_name,
                        email: res.data.email,
                        profile_image: res.data.profile_image,
                        password: res.data.password,
                        cellphone_number: res.data.cellphone_number,
                        reviews: res.data.reviews,
                        reserves: res.data.reserve_id
                    });
                    console.log('esto es onChange');
                    console.log(onChange);
                });
            }
            return getUser();
        } else {
            onChange(null);
        }
    });
};
