import { useContext, useMemo } from 'react';
import { currencySort } from '../utils';
import { CurrencyContext } from '../stores/context/store';

export function useContextStore() {
  const ctx = useContext(CurrencyContext);
  if (!ctx)
    throw new Error('useContextStore must be used within ContextStoreProvider');

  const { state, setSort, load } = ctx;

  const items = useMemo(
    () => currencySort(state.items, state.sort),
    [state.items, state.sort]
  );

  return {
    items,
    isLoading: state.isLoading,
    error: state.error,
    sort: state.sort,
    setSort,
    load,
  };
}
