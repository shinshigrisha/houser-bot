import {Markup} from "telegraf";

export const locationAction = (ctx: any) => {
  const message = "Выберите локации, по которым мы начнем наш поиск:";
  return ctx.replyWithMarkdownV2(
    message,
    Markup.inlineKeyboard(
      [
        Markup.button.callback("Анталия", "Antalya"),
        Markup.button.callback("Стамбул", "Istanbul"),
        Markup.button.callback("Аланья", "Alanya"),
        Markup.button.callback("Кемер", "Kemer"),
        Markup.button.callback("Мерсин", "Mersin"),
        Markup.button.callback("Демирташ", "Demirtash"),
        Markup.button.callback("Газипаша", "Gazipasa"),
        Markup.button.callback("Сиде", "Side"),
      ],
      {
        columns: 2,
      }
    ),
  );
};
