import {useState, useEffect} from 'react';
import firestore from '../firebase/config';

const useFirestoreDocs = (collection) => {

    const [docs, setDocs] = useState([]);

    useEffect(() => {
        let docRef = firestore.collection(collection);
        docRef.get().then((snap) =>{
            const documents = [];
            snap.forEach((doc) =>{
                documents.push({id: doc.id, ...doc.data()});
            });
            setDocs(documents);
        });
    }, [collection]);


    return {docs};
}

export default useFirestoreDocs;