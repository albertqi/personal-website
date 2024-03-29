import { db } from "../config/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function getProjects() {
    const collectionRef = collection(db, "projects");
    const collectionQuery = query(collectionRef, orderBy("id", "desc"));
    const collectionQuerySnapshot = await getDocs(collectionQuery);
    const result = collectionQuerySnapshot.docs.map(doc => {
        if (doc.exists()) return doc.data();
    });
    return result;
}