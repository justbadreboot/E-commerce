import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDM_YiRtx4T6yYWFbGafxSGzNAbWwjGOio",
  authDomain: "kruger-ecommerce.firebaseapp.com",
  projectId: "kruger-ecommerce",
  storageBucket: "kruger-ecommerce.appspot.com",
  messagingSenderId: "627970173293",
  appId: "1:627970173293:web:70385ef80d313a27709264"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;
