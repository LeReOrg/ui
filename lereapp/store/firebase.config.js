import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBrjNPHbl9Gp7TpMHMzfj-hJUNd4ipzMLI",
    authDomain: "lereorg.firebaseapp.com",
    databaseURL: "https://lereorg.firebaseio.com",
    projectId: "lereorg",
    storageBucket: "lereorg.appspot.com",
    messagingSenderId: "917393781941",
    appId: "1:917393781941:web:c63b69a5bdf40a10b0fafc",
    measurementId: "G-YJ2XJ3G9JV"
};

  export const createUserProfileDocument = async(userAuth, additionData) =>{
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const collectionRef = firestore.collection('users');
    const snapShot = await userRef.get();
    const collectionSnapshot = await collectionRef.get();

    console.log('aaaa'+ collectionSnapshot)
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionData
        })
      } catch (error) {
          console.log('error creating user',error.message)
      }
    }
    return userRef;
  };

  export const addCollectionAndItems = async (collectionKey,objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj);
    });

    return await batch.commit()
  };

  export const convertCollectionsSnapshotToMap = collections => {
     const transformedCollection = collections.docs.map(doc => {
       const { title,items } = doc.data();

       return{
         routeName : encodeURI(title.toLowerCase()),
         id : doc.id,
         title,
         items
       }
     });

    return transformedCollection.reduce((accumulator,collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{})
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }  

  export const getCurrentUser = () => {
    return new Promise((resolve,reject) =>{
      const unsubscribe = auth.onAuthStateChanged(userAuth =>{
        unsubscribe();
        resolve(userAuth);
      }, reject)
    })
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt : 'select_account'});


  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
  export const facebookProvider = new firebase.auth.FacebookAuthProvider();
  facebookProvider.setCustomParameters({prompt : 'select_account'})
  export const signInWithFaceBook = () => auth.signInWithPopup(facebookProvider)
  export default firebase;