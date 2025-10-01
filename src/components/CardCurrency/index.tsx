import { FC } from 'react';
import type { ICardCurrencyProps } from '../../types';

const CardCurrency: FC<ICardCurrencyProps> = ({ code, value, name }) => {
  return (
    <div className="rounded-2xl p-4 bg-white flex flex-col items-center w-44">
      <div className="text-xl font-bold text-indigo-600">{code}</div>

      {name && <div className="text-sm text-gray-500 mb-2">{name}</div>}

      <div className="text-2xl font-semibold text-gray-800">
        {value.toFixed(2)}
      </div>
    </div>
  );
};

export default CardCurrency;
