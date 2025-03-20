// firebase.tsx
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDuHzmV3pI68wY35HIOaQEExQKI1IZ8ZbI",
    authDomain: "f-gen-f3357.firebaseapp.com",
    projectId: "f-gen-f3357",
    storageBucket: "f-gen-f3357.firebasestorage.app",
    messagingSenderId: "706029529632",
    appId: "1:706029529632:web:08c19ab965819475e12a45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

// Export db as a named export
export { db };
