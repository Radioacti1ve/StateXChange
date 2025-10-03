// src/columns/ReduxColumn.tsx
import { useEffect } from 'react';
import type { SortState } from '../../types';
import { CardColumns } from '..';
import { useRenderCount, useReduxStore } from '../../hooks';

const ReduxColumn: React.FC<{ sort: SortState }> = ({ sort }) => {
  const renders = useRenderCount();
  const { items, isLoading, error, load, setSort } = useReduxStore();

  useEffect(() => {
    load();
  }, [load]);

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
