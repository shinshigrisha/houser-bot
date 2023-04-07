//
export const DATABASE = process.env.FIREBASE_DATABASE as string;
export const MAX_SEARCHES = 3;
export const FIREBASE_AUTH = {
  projectId: process.env.FIREBASE_PROJECT_ID as string,
  privateKey: process.env.FIREBASE_PRIVATE_KEY as string,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
};
export const IS_DEV = process.env.NODE_ENV === "development";
export const BOT_TOKEN = IS_DEV ?
  (process.env.TEST_BOT_TOKEN as string) :
  (process.env.BOT_TOKEN as string);


export const firebaseConfig = {
  apiKey: "AIzaSyAap0SXlUVcpxw8XOa4jelIQOAJXWsqslA",
  authDomain: "houserbot-b5e78.firebaseapp.com",
  projectId: "houserbot-b5e78",
  storageBucket: "houserbot-b5e78.appspot.com",
  messagingSenderId: "1074992857316",
  appId: "1:1074992857316:web:40a864f78755d080b9ecf1",
  measurementId: "G-T81MBQSVJT",
};
