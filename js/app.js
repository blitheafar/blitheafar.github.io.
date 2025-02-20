import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCdbVpiNWP7LF6XDM18Hkutdt04K3mcOW0",
    authDomain: "afarstore-9177c.firebaseapp.com",
    projectId: "afarstore-9177c",
    storageBucket: "afarstore-9177c.firebasestorage.app",
    messagingSenderId: "898887994033",
    appId: "1:898887994033:web:1799f38cf53981a8c2b090",
    measurementId: "G-TPR6HR2FPX"
  };

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 获取数据引用
const itemsRef = db.collection('items');
const analytics = getAnalytics(app);
console.log("itemsRef",itemsRef);

// Get a list of cities from your database
async function getCities(db) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
  }