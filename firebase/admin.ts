import {initializeApp, getApps, cert} from 'firebase-admin/app';
import {getAuth} from "firebase-admin/auth";
import {getFirestore} from "firebase-admin/firestore";

const initFirebaseAdmin = () => {
    const apps = getApps();

    if(!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.split(String.raw`\n`).join('\n')  //this is considered to be much more secure cuz we are making calls from the server.  
            })
        })
    }

    return {
        auth: getAuth(),
        db: getFirestore(),
    }
}

export const { auth, db } = initFirebaseAdmin();