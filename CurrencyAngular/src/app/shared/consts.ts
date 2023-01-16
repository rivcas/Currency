import { ApiServices } from './enums/api-services.enum';

// simple consts
export const SITE_TITLE: string = 'Currencies';

// api services consts
export const CURRENCY_CTRLR: string = 'Currency';

export const API_URLS = {
  GET_CURRENCIES: `${CURRENCY_CTRLR}/${ApiServices.GetCurrencies}`,
};

// dates consts
export const DATE_FORMAT: string = 'dd/MM/yyyy';
export const NOW: Date = new Date();
