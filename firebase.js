import {initializeApp} from 'firebase/app'
import Constants from 'expo-constants';
import {getFirestore} from 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


