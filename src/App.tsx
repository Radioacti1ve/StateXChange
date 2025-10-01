import { useEffect, useState } from 'react';
import './App.css';
import { SortState } from './types';
import { SortBar, CardColumns } from './components';

const cur = [
  { code: 'USD', value: 123 },
  { code: 'EUR', value: 3123 },
];

function App() {
  const [sort, setSort] = useState<SortState>({
    field: 'name',
    order: 'asc',
  });

  useEffect(() => {}, [sort]);
  
  return (
    <main className="grid gap-5">
      <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
        Сравнение стейт менеджеров
      </h1>
      <SortBar value={sort} onChange={setSort} />
      <CardColumns title="redux" items={cur}></CardColumns>
    </main>
  );
}

export default App;
