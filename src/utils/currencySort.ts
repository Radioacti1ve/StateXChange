import { ICardCurrencyProps } from '../types';

export type SortField = 'name' | 'value';
export type SortOrder = 'asc' | 'desc';

export interface SortState {
  field: SortField;
  order: SortOrder;
}

export const currencySort = (
  list: ICardCurrencyProps[],
  sort: SortState
): ICardCurrencyProps[] => {
  const { field, order } = sort;
  const dir = order === 'asc' ? 1 : -1;

  return [...list].sort((a, b) => {
    const av = field === 'name' ? a.name ?? a.code : a.value;
    const bv = field === 'name' ? b.name ?? b.code : b.value;

    if (typeof av === 'number' && typeof bv === 'number') {
      return (av - bv) * dir;
    }
    return String(av).localeCompare(String(bv)) * dir;
  });
};
