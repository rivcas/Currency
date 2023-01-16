export interface IApiResponse<T = any> {
  isError: boolean;
  messageCode: number;
  messageDesc: string;
  data: T;
}

export interface IGetCurrenciesRes extends IApiResponse {
  data: ICurrency[];
}

export interface ICurrency {
  key: string;
  currentExchangeRate: number;
  currentChange: number;
  unit: number;
  lastUpdate: Date;
}
