import { createContext } from 'react';
import type { SortState, ICardCurrencyProps } from '../../types';

export type State = {
  items: ICardCurrencyProps[];
  isLoading: boolean;
  error: string | null;
  sort: SortState;
};

export type Ctx = {
  state: State;
  setSort: (s: SortState) => void;
  load: (base?: string) => void;
};

export const CurrencyContext = createContext<Ctx | null>(null);
