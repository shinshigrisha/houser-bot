import {getDB} from "../database/database";

const PATH = "chats";

interface IChatData {
    firstName: string;
    lastName: string;
    username: string;
    language: string;
    isDoSearchAction?: boolean;
}

// eslint-disable-next-line require-jsdoc
export function addChat(chatId: number, chat: IChatData) {
  return getDB()
    .ref(`${PATH}/${chatId}`)
    .set({...chat, ...{isDoSearchAction: false}});
}
