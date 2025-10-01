import { FC } from 'react';
import type { ICardsColumnsProps } from '../../types';
import CardCurrency from '../CardCurrency';

const CurrencyCards: FC<ICardsColumnsProps> = ({
  title,
  items,
  isLoading,
  error,
}) => {
  return (
    <div className="rounded-2xl bg-slate-900 p-4 shadow-lg space-y-3 w-full">
      <h2 className="text-lg font-semibold text-white text-center">{title}</h2>

      {isLoading && <div className="text-gray-400 text-center">Загрузка…</div>}
      {error && <div className="text-red-400 text-center">Ошибка: {error}</div>}

      <div className="grid grid-cols-1 gap-4 justify-items-center">
        {items.map((item) => (
          <CardCurrency key={item.code} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CurrencyCards;
