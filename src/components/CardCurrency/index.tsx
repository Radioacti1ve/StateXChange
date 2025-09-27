import { currencyNames } from '../../constants/currencyNames';
import type { ICardCurrencyProps } from '../../types';

function CardCurrency({ code, value }: ICardCurrencyProps) {
  const name = currencyNames[code as keyof typeof currencyNames] ?? '';

  return (
    <div className="rounded-2xl p-4 bg-white flex flex-col items-center w-44">
      <div className="text-xl font-bold text-indigo-600">{code}</div>

      {name && <div className="text-sm text-gray-500 mb-2">{name}</div>}

      <div className="text-2xl font-semibold text-gray-800">
        {value.toFixed(2)}
      </div>
    </div>
  );
}

export default CardCurrency;
