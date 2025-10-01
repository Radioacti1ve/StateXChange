import type { ICurrencyList } from '../types';

export const CURRENCY_NAMES: Record<keyof ICurrencyList, string> = {
  USD: 'Доллар США',
  EUR: 'Евро',
  GBP: 'Фунт стерлингов',
  JPY: 'Японская иена',
  CNY: 'Китайский юань',
  AUD: 'Австралийский доллар',
  CAD: 'Канадский доллар',
  CHF: 'Швейцарский франк',
  NZD: 'Новозеландский доллар',
  SEK: 'Шведская крона',
  NOK: 'Норвежская крона',
  KRW: 'Южнокорейская вона',
  INR: 'Индийская рупия',
  RUB: 'Российский рубль',
  BRL: 'Бразильский реал',
};
