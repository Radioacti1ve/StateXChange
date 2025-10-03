import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CardColumns } from '..';
import type { SortState } from '../../types';
import { useMobXStore, useRenderCount } from '../../hooks';

const MobXColumnBase: React.FC<{ sort: SortState }> = ({ sort }) => {
  const renders = useRenderCount();
  const { items, isLoading, error, load, setSort } = useMobXStore();

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    setSort(sort);
  }, [sort, setSort]);

  return (
    <CardColumns
      title={`MobX (${renders})`}
      items={items}
      isLoading={isLoading}
      error={error ?? undefined}
    />
  );
};

const MobXColumn = observer(MobXColumnBase);

export default MobXColumn;
