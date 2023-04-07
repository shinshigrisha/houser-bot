
import {Context, Scenes} from "telegraf";
export enum GLOBAL_ACTIONS {
    location = "location",
    category = "category",
    rates = "rates",
    support = "support",
    openSearchResults = "open_search_results",
}

export enum CITIES_ACTIONS {
    Antalya = "Antalya",
}

export enum CATEGORY_ACTIONS {
    search_renter ="search_renter",
}

export interface TelegrafContext extends Context {
    scene: Scenes.SceneContextScene<TelegrafContext, WizardSession>;
    wizard: Scenes.WizardContextWizard<TelegrafContext>;

}

type ISearchData = {
    chatId?: number;
    channelTgId?: string;
    city?: string;
    cities?: []
    category?: string;
    budget?: number;
    apartment?: string
};

interface WizardSession extends Scenes.WizardSessionData {
    search: ISearchData;
}


