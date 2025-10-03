import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { SortState } from '../types';
import type { AppDispatch, RootState } from '../stores/redux/store';
import {
  selectSortedItems,
  selectIsLoading,
  selectError,
  setSort,
} from '../stores/redux/slices/currencySlice';
import { loadCurrency } from '../stores/redux/thunks/loadCurrency';

export function useReduxStore() {
  const dispatch = useDispatch<AppDispatch>();

  const items = useSelector((s: RootState) => selectSortedItems(s));
  const isLoading = useSelector((s: RootState) => selectIsLoading(s));
  const error = useSelector((s: RootState) => selectError(s));
  const sort = useSelector((s: RootState) => s.currency.sort);

  const load = useCallback(
    (base = 'USD') => {
      dispatch(loadCurrency(base));
    },
    [dispatch]
  );

  const setSortAction = useCallback(
    (s: SortState) => {
      dispatch(setSort(s));
    },
    [dispatch]
  );

  return {
    items,
    isLoading,
    error,
    sort,
    setSort: setSortAction,
    load,
  };
}
