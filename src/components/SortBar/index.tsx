import { FC } from 'react';
import { ISortBarProps, SortState, SortField, SortOrder } from '../../types';

const SortBar: FC<ISortBarProps> = ({ value, onChange }) => {
  const patch = (p: Partial<SortState>) => onChange({ ...value, ...p });

  return (
    <div className="flex justify-center items-center gap-10 p-3 bg-slate-900/40 rounded-2xl">
      <label className="flex items-center gap-5">
        <span className="text-sm text-slate-300">Сортировать по</span>
        <select
          className="px-3 py-2 rounded-xl bg-slate-800 text-slate-100"
          value={value.field}
          onChange={(e) => patch({ field: e.target.value as SortField })}
        >
          <option value="name">названию</option>
          <option value="value">цене</option>
        </select>
      </label>

      <label className="flex items-center gap-5">
        <span className="text-sm text-slate-300">Порядок</span>
        <select
          className="px-3 py-2 rounded-xl bg-slate-800 text-slate-100 flex items-center"
          value={value.order}
          onChange={(e) => patch({ order: e.target.value as SortOrder })}
        >
          <option value="asc">⬆ По возрастанию</option>
          <option value="desc">⬇ По убыванию</option>
        </select>
      </label>
    </div>
  );
};

export default SortBar;
