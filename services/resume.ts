import { db } from "../config/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function getResume(collectionId: string) {
    const collectionRef = collection(db, collectionId);
    const collectionQuery = query(collectionRef, orderBy("id", "desc"));
    const collectionQuerySnapshot = await getDocs(collectionQuery);
    const result = collectionQuerySnapshot.docs.map(doc => {
        if (doc.exists()) return doc.data();
    });
    return result;
}