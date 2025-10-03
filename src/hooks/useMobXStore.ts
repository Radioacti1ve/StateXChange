import { useContext, useCallback } from 'react';
import { MobXStoreContext } from '../stores/mobx/store';

export function useMobXStore() {
  const store = useContext(MobXStoreContext);
  if (!store)
    throw new Error('useMobXStore must be used within MobXStoreProvider');

  const load = useCallback((base: string = 'USD') => store.load(base), [store]);
  const setSort = useCallback(
    (s: typeof store.sort) => store.setSort(s),
    [store]
  );

  return {
    items: store.sortedItems,
    isLoading: store.isLoading,
    error: store.error,
    sort: store.sort,
    setSort,
    load,
  };
}
