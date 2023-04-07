import {credential} from "firebase-admin";
import cert = credential.cert;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const admin = require("firebase-admin");
// eslint-disable-next-line @typescript-eslint/no-var-requires,max-len


export const initDatabase = () => {
  admin.initializeApp({
    credential: cert({
      projectId: "houserbot-b5e78",
      // eslint-disable-next-line max-len
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCavvO0a2++knVw\nnzc45p+2YIDw9PNd9MEjgtB9MPon9HQaYO9GRQ+r8b+LqqNDVmGz84w+90IHw5mD\n6eKcHrQG2ZMdEg8kezM2OwXmM+Yluq0pDQrFLycrG0wDhwurTVmCJEQY0MdD7gy4\nKbXzN6P/HGlF6COO0HP2uzxorDZWdugORTSyIAlMMaqA0t1axut7hyc+HyDgiz4O\nlFkfFbLv0pDeCefd9vUTpz5Btn9I2x1cAlZHM2YAKKRxcQqYnZg3Fyeiv0/+o0lA\ni8Frz/LRCX2nzRcXVyLL6Qnd7ZdELLpOhK+zHp01fPJRGpIKvKoah4X/7uwkLLyK\nmIipxc3LAgMBAAECggEADHE9HC0lS3/wNHGA2bDld58TzwwLA2t6GhZbGC3Xd132\n9eYEZzSHWY5zFdJPFUt9SKBVDv0HkKNAFTS5lU78r65P318D262SRRKC22sh3re/\nU5UqYAd2EUe9GW2C2S+7ejTbStmCpCogWLB14kv/gjQxHL9ZGJMXN+f/J/Vs2w/N\nfogct/f4h0svwa/mbSDwE2i7o7TdSMMr1s0D4mStrIjDmnIQxeujWVCncIcYrVP3\nr+FA4pqmQEBvvG+giADpHb9V4uIPfGvVliGteg01J11jHD4HiVYIYVTDDEZ9OM9k\nKsWznnLGsppNyov8n3/8o+3AQryh2pPQrzNSiMJFiQKBgQDKyV3M0O+nHIrIpM3+\nh6S2F5OdL7Hpg+dfs/BhfKXxKy4Ku0b6nIwYSfO8EcrsruWOTDK7Q1keWDvFbsfs\nzoNOv0CAn2prRCQJ3+z8U4gNjoZlxBEpqzjiQm05sLnWAIbCmMBE5EBamxMSthR/\nHY3H1A4phafG2BS/8HOzkTjcmQKBgQDDWljz6WoS/Ep0HrzwpxnkJTe4k3d93ygH\njXCCtBGN33A4JwENRXpxqwWZTZoLA6QitU58x67OeWx4juwDvlMSqRo5A5O9bU9S\nU2rhMCZQ1wYLvOkkqn5PubGffwL0epakKpA++vYCaJ4UUt3jiTJ4240yk6SDzWKS\nIpWmxP/4AwKBgQDGVxXrkiAUrxH/FVJ1tW4gvAahI1k8MMtJC9H9R9F2hOlPjcTq\nsdtElnBSboSv4pCcEWM9Ta4Iw/wSKzxYHdTIXL9WDpYjvE4TanV8hqb3u4MwXgj7\nXIESrC3w0y2wZmtoQccsmqNm+244SubZParC3GHNsvBayFXjNee0pkGbYQKBgAKp\nb37bVlut3mHYrWBmFn86VpkIQV+Qs93uenL9eyPAwKmzNlt07+cummPtX8T4prrm\nV4xxuBsOIoE+CU8/v6gIb9gJCXFSVPtdMZ6h5lPBqk5so4yhWhlCAX6X33VvWjAg\neFizWLjNriG+w1E/ZFWrQDBJPLujB83P9NQR6R77AoGAePgbaHj/Z460wIH+DinA\ngI9qkFgfb3P2Adgs7TMdl0SvZRDYabK1+RHjbronKtAPFyl/7A3Md3U/4zuzyUT1\nb56Urhn2E/4D/Od/28QjZcYuthziXEG5E3efeRk/PO+IsiTvZP/ey0ZmkB3PFnzT\nBV+FW8lIC5/vp1f1CgkNFas=\n-----END PRIVATE KEY-----\n",
      // eslint-disable-next-line max-len
      clientEmail: "firebase-adminsdk-eetc2@houserbot-b5e78.iam.gserviceaccount.com",
    }),
    databaseURL: "https://houserbot-b5e78-default-rtdb.europe-west1.firebasedatabase.app",
  });
};
export const getDB = () => {
  return admin.database();
};
