import * as firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyD2HMnq74TQv8CvsCbrrc4Xc1O-telJSdI",
    authDomain: "comtable-8dbf1.firebaseapp.com",
    databaseURL: "https://comtable-8dbf1.firebaseio.com",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
const firebaseDatabase = firebase.database();

const firebaseAPI = {
    get: (url, resolve, reject) => {
        firebaseDatabase
            .ref(url)
            .once('value')
            .then(
                (snapshot) => {
                    resolve(snapshot.val());
                },
                (error) => {
                    reject(error);
                }
            );
    },
    post: (url, data) => {
        return firebaseDatabase
            .ref()
            .child(url)
            .push(data);
    }
};

export default firebaseAPI;
