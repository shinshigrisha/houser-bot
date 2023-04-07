import {Markup} from "telegraf";

export const categoryAction = (ctx: any) => {
  const message = "Выберите локации, по которым мы начнем наш поиск:";
  return ctx.replyWithMarkdownV2(
    message,
    Markup.inlineKeyboard(
      [
        Markup.button.callback("Поиск арендаторов", "search_renter"),
        Markup.button.callback("Поиск арендодателей", "search_landlords"),
        Markup.button.callback("Поиск продавцов", "search_sellers"),
        Markup.button.callback("Поиск покупателей", "search_buyers"),
      ],
      {
        columns: 2,
      }
    ),
  );
};
