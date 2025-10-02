// src/columns/ReduxColumn.tsx
import { useEffect } from 'react';
import { useReduxStore } from '../hooks/useReduxStore';
import type { SortState } from '../types';
import { CardColumns } from '../components';
import { useRenderCount } from '../hooks/useRenderCount';

const ReduxColumn: React.FC<{ sort: SortState }> = ({ sort }) => {
  const renders = useRenderCount();
  const { items, isLoading, error, load, setSort } = useReduxStore();

  // load стабилен, можно зависеть от него
  useEffect(() => {
    load();
  }, [load]);

  // setSort стабилен, зависим от sort и setSort
  useEffect(() => {
    setSort(sort);
  }, [sort, setSort]);

  return (
    <CardColumns
      title={`Redux RTK (${renders})`}
      items={items}
      isLoading={isLoading}
      error={error ?? undefined}
    />
  );
};

export default ReduxColumn;
