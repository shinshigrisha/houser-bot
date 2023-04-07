import {Markup} from "telegraf";
import {GLOBAL_ACTIONS} from "../type";
import {addChat} from "../services/chats";
import {messageStart} from "../locales/ru";


export const startAction = (ctx: any) => {
  const message = messageStart;
  const chatId = ctx.from?.id;

  if (chatId) {
    addChat(chatId, {
      firstName: ctx.from?.first_name || "",
      lastName: ctx.from?.last_name || "",
      username: ctx.from?.username || "",
      language: ctx.from?.language_code || "",
    });
  }
  return ctx.replyWithMarkdownV2(
    message,
    Markup.inlineKeyboard(
      // eslint-disable-next-line max-len
      [Markup.button.callback("Выбор локации", GLOBAL_ACTIONS.location),
        // eslint-disable-next-line max-len
        Markup.button.callback("Выбор категории запрсов", GLOBAL_ACTIONS.category),
        Markup.button.callback("Тарифы и оплата", GLOBAL_ACTIONS.rates),
        // eslint-disable-next-line max-len
        Markup.button.callback("Поддержка", GLOBAL_ACTIONS.support),
      ],
      {
        columns: 2,
      }
    )
  );
};

