// import {BOT_TOKEN, FIREBASE_AUTH} from "../config";
import {initActions} from "./actions";
import {Telegraf} from "telegraf";
import {TelegrafContext} from "./type";
import {initDatabase} from "./database/database";


const token = "6085981384:AAE2PiPHjBds1oE4lPwZsxj1QXf1qeuKqG0";
const bot = new Telegraf<TelegrafContext>(token);
initActions(bot);
initDatabase();
bot.launch();


// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
process.on("unhandledRejection", (error) => {
  console.error(error);
  process.exit(1);
});
process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});


// import {Telegraf} from "telegraf";
// import {message} from "telegraf/filters";
//
// const bot = new Telegraf("6085981384:AAE2PiPHjBds1oE4lPwZsxj1QXf1qeuKqG0");
// bot.start((ctx: any) => ctx.reply("Welcome"));
// bot.help((ctx: any) => ctx.reply("Send me a sticker"));
// bot.on(message("sticker"), (ctx: any) => ctx.reply("👍"));
// bot.hears("hi", (ctx: any) => {
//   return ctx.reply("Hey there");
// });
// bot.launch();
//
// // Enable graceful stop
// process.once("SIGINT", () => bot.stop("SIGINT"));
// process.once("SIGTERM", () => bot.stop("SIGTERM"));
