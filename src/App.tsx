import './App.css';
import CardCurrency from './components/CardCurrency';

function App() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
        Сравнение стейт менеджеров
      </h1>
      <div className="card">
        <CardCurrency code="USD" value={123123} name="Доллар" />
      </div>
    </>
  );
}

export default App;
