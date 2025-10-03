import { createContext } from 'react';
import type { SortState, ICardCurrencyProps } from '../../types';

export interface IContextState {
  items: ICardCurrencyProps[];
  isLoading: boolean;
  error: string | null;
  sort: SortState;
}

export interface IContext {
  state: IContextState;
  setSort: (s: SortState) => void;
  load: (base?: string) => void;
}

export const CurrencyContext = createContext<IContext | null>(null);
