import { useEffect } from 'react';
import CardColumns from '../components/CardsColumns';
import type { SortState } from '../types';
import { useContextStore } from '../hooks/useContextStore';
import { useRenderCount } from '../hooks/useRenderCount';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
