import { getFirestore, collection, getDocs ,doc, getDoc} from "firebase/firestore"
import { app } from "./config"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)



export const getProducts = async (setItems) => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const products = [];
  
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() })
    })
  
    setItems(products)
  }


  export const getSingleProduct = async (id, setItem) => {
    const docRef = doc(db, "items", id.trim()); // Asegúrate de hacer trim
    const docSnap = await getDoc(docRef);
      
    if (docSnap.exists()) {
      setItem({ id: docSnap.id, ...docSnap.data() })
    } else {
      console.log("No such document!");
    }
  }
  
  