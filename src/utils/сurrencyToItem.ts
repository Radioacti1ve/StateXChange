import { ICurrencyApiResponse, ICardCurrencyProps } from '../types';
import { CURRENCY_NAMES } from '../constants/currencyNames';

export const currencyToItem = (
  response: ICurrencyApiResponse
): ICardCurrencyProps[] => {
  return Object.entries(response.conversion_rates)
    .slice(0, 15)
    .map(([code, value]) => ({
      code,
      value,
      name: CURRENCY_NAMES[code as keyof typeof CURRENCY_NAMES] ?? code,
    }));
};
