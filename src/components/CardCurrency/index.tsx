import { FC } from 'react';
import type { ICardCurrencyProps } from '../../types';

const CardCurrency: FC<ICardCurrencyProps> = ({ code, value, name }) => {
  return (
    <div className="rounded-2xl p-4 bg-[var(--color-card)] flex flex-col items-center w-44 shadow">
      <div className="text-xl font-bold text-[var(--color-primary)]">
        {code}
      </div>

      {name && (
        <div className="text-sm text-[var(--color-muted)] mb-2">{name}</div>
      )}

      <div className="text-2xl font-semibold text-[var(--color-strong)]">
        {value.toFixed(2)}
      </div>
    </div>
  );
};

export default CardCurrency;
