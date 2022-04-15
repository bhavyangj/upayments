import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAwae_XmZ1GaLCT4pYr6mGD_zoqFLORC-0",
	authDomain: "upload-files-9225c.firebaseapp.com",
	projectId: "upload-files-9225c",
	storageBucket: "upload-files-9225c.appspot.com",
	messagingSenderId: "1030900716311",
	appId: "1:1030900716311:web:540f8ea607d5d9d992dd52",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
