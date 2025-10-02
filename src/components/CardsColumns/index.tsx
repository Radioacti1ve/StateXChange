import { FC } from 'react';
import type { ICardsColumnsProps } from '../../types';
import CardCurrency from '../CardCurrency';
const CardColumns: FC<ICardsColumnsProps> = ({
  title,
  items,
  isLoading,
  error,
}) => {
  return (
    <div className="rounded-2xl p-4 shadow-lg space-y-3 w-full bg-[var(--color-bg)]">
      {' '}
      <h2
        className="text-lg font-semibold text-center bg-clip-text text-transparent"
        style={{ backgroundImage: 'var(--gradient-accent)' }}
      >
        {' '}
        {title}{' '}
      </h2>{' '}
      {isLoading && (
        <div className="text-[var(--color-muted)] text-center">Загрузка…</div>
      )}{' '}
      {error && <div className="text-red-400 text-center">Ошибка: {error}</div>}{' '}
      <div className="grid grid-cols-1 gap-4 justify-items-center">
        {' '}
        {items.map((item) => (
          <CardCurrency key={item.code} {...item} />
        ))}{' '}
      </div>{' '}
    </div>
  );
};
export default CardColumns;
