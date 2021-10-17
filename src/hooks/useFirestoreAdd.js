import firestore from '../firebase/config';

const firestoreAdd = (collection, data) => {
    let collectionRef = firestore.collection(collection);
    collectionRef.add({...data});
}

export default firestoreAdd;