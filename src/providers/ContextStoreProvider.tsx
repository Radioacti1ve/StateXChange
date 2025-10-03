import React, { useMemo, useReducer } from 'react';
import { getCurrency } from '../api/getCurrency';
import { currencyToItem } from '../utils';
import type { SortState } from '../types';
import { CurrencyContext, type IContextState } from '../stores/context/store';

type Action =
  | { type: 'LOAD_START' }
  | { type: 'LOAD_SUCCESS'; payload: IContextState['items'] }
  | { type: 'LOAD_ERROR'; payload: string }
  | { type: 'SET_SORT'; payload: SortState };

const initialState: IContextState = {
  items: [],
  isLoading: false,
  error: null,
  sort: { field: 'name', order: 'asc' },
};

function reducer(state: IContextState, action: Action): IContextState {
  switch (action.type) {
    case 'LOAD_START':
      return { ...state, isLoading: true, error: null };
    case 'LOAD_SUCCESS':
      return { ...state, isLoading: false, items: action.payload };
    case 'LOAD_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'SET_SORT':
      return { ...state, sort: action.payload };
    default:
      return state;
  }
}

const ContextStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const load = (base: string = 'USD') => {
    dispatch({ type: 'LOAD_START' });
    getCurrency(base)
      .then(currencyToItem)
      .then((items) => dispatch({ type: 'LOAD_SUCCESS', payload: items }))
      .catch((e: Error) =>
        dispatch({ type: 'LOAD_ERROR', payload: e.message })
      );
  };

  const setSort = (s: SortState) => dispatch({ type: 'SET_SORT', payload: s });

  const value = useMemo(() => ({ state, setSort, load }), [state]);

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default ContextStoreProvider;
