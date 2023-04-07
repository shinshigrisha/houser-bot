import {Telegraf} from "telegraf";
import {startAction} from "./start";
import {GLOBAL_ACTIONS, TelegrafContext} from "../type";
import {locationAction} from "./serachLocation";
import {categoryAction} from "./searchCategory";

export const initActions = (bot: Telegraf<TelegrafContext>) => {
  bot.start(startAction);
  bot.settings(async (ctx) => {
    await ctx.setMyCommands([]);
  });

  bot.command(GLOBAL_ACTIONS.location, locationAction);
  bot.command(GLOBAL_ACTIONS.category, categoryAction);
  // bot.command(GLOBAL_ACTIONS.rates, actionSearches);

  bot.action(GLOBAL_ACTIONS.location, locationAction);
  bot.action(GLOBAL_ACTIONS.category, categoryAction);
};
