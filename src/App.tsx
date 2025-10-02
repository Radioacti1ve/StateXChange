import { useState } from 'react';
import type { SortState } from './types';
import { SortBar } from './components';
// import ContextColumn from './columns/ContextColumn';
// import MobXColumn from './columns/MobXColumn';
// import ReduxColumn from './columns/ReduxColumn';

export default function App() {
  const [sort, setSort] = useState<SortState>({ field: 'name', order: 'asc' });

  return (
    <main className="grid gap-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gradient tracking-tight">
        Redux vs MobX vs Context
      </h1>

      <SortBar value={sort} onChange={setSort} />

      {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ReduxColumn sort={sort} />
      </section> */}

      {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MobXColumn sort={sort} />
      </section> */}

      {/* <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ContextColumn sort={sort} />
      </section> */}
    </main>
  );
}
