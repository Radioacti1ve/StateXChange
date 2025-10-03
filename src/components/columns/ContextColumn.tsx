import { useEffect } from 'react';
import { CardColumns } from '..';
import type { SortState } from '../../types';
import { useContextStore, useRenderCount } from '../../hooks';

const ContextColumn: React.FC<{ sort: SortState }> = ({ sort }) => {
  const renders = useRenderCount();
  const {
    items,
    isLoading,
    error,
    load,
    setSort,
    sort: currentSort,
  } = useContextStore();

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (currentSort.field !== sort.field || currentSort.order !== sort.order) {
      setSort(sort);
    }
  }, [sort, currentSort.field, currentSort.order, setSort]);

  return (
    <CardColumns
      title={`Context (${renders})`}
      items={items}
      isLoading={isLoading}
      error={error ?? undefined}
    />
  );
};

export default ContextColumn;
