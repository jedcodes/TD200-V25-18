import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRtxMQrU5IruvBUxQgQaWtYxABAKTREsk",
  authDomain: "paddleforocean-app.firebaseapp.com",
  projectId: "paddleforocean-app",
  storageBucket: "paddleforocean-app.firebasestorage.app",
  messagingSenderId: "1060369048631",
  appId: "1:1060369048631:web:3f633af07a173076e18bb2",
  measurementId: "G-K97G82FKQG",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
