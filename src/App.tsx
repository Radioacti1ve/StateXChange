import { useState } from 'react';
import type { SortState } from './types';
import { SortBar, ContextColumn, MobXColumn, ReduxColumn } from './components';

export default function App() {
  const [sort, setSort] = useState<SortState>({ field: 'name', order: 'asc' });

  return (
    <main className="grid gap-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gradient tracking-tight">
        Redux vs MobX vs Context
      </h1>

      <SortBar value={sort} onChange={setSort} />
      <section className="grid grid-cols-3 md:grid-cols-3 gap-4 px-6">
        <ReduxColumn sort={sort} />
        <MobXColumn sort={sort} />
        <ContextColumn sort={sort} />
      </section>
    </main>
  );
}
