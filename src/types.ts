export interface ICurrencyList {
  USD: number;
  EUR: number;
  GBP: number;
  JPY: number;
  CNY: number;
  AUD: number;
  CAD: number;
  CHF: number;
  NZD: number;
  SEK: number;
  NOK: number;
  KRW: number;
  INR: number;
  RUB: number;
  BRL: number;
}

export interface ICurrencyApiResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  base_code: string;
  conversion_rates: ICurrencyList;
}

export interface ICardCurrencyProps {
  code: string;
  value: number;
  name?: string;
}
