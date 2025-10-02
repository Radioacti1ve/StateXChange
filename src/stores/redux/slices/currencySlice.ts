import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import type { ICardCurrencyProps, SortState } from '../../../types';
import { currencySort } from '../../../utils';

export type CurrencyState = {
  items: ICardCurrencyProps[];
  isLoading: boolean;
  error: string | null;
  sort: SortState;
};

const initialState: CurrencyState = {
  items: [],
  isLoading: false,
  error: null,
  sort: { field: 'name', order: 'asc' },
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    loadStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    loadSuccess(state, action: PayloadAction<ICardCurrencyProps[]>) {
      state.isLoading = false;
      state.items = action.payload;
    },
    loadError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSort(state, action: PayloadAction<SortState>) {
      state.sort = action.payload;
    },
  },
});

export const { loadStart, loadSuccess, loadError, setSort } =
  currencySlice.actions;

export const currencyReducer = currencySlice.reducer;

type RootLike = { currency: CurrencyState };

export const selectCurrency = (s: RootLike) => s.currency;
export const selectItems = (s: RootLike) => s.currency.items;
export const selectSort = (s: RootLike) => s.currency.sort;
export const selectIsLoading = (s: RootLike) => s.currency.isLoading;
export const selectError = (s: RootLike) => s.currency.error;

export const selectSortedItems = createSelector(
  [selectItems, selectSort],
  (items, sort) => currencySort(items, sort)
);
