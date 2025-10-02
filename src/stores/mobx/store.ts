import { makeAutoObservable, computed, runInAction } from 'mobx';
import { createContext } from 'react';
import type { ICardCurrencyProps, SortState } from '../../types';
import { currencySort } from '../../utils';
import { getCurrency } from '../../api/getCurrency';
import { currencyToItem } from '../../utils';

export class CurrencyMobxStore {
  items: ICardCurrencyProps[] = [];
  isLoading = false;
  error: string | null = null;
  sort: SortState = { field: 'name', order: 'asc' };

  constructor() {
    makeAutoObservable(this, {
      sortedItems: computed,
    });
  }

  get sortedItems() {
    return currencySort(this.items, this.sort);
  }

  setSort(s: SortState) {
    if (this.sort.field === s.field && this.sort.order === s.order) return; // no-op
    this.sort = s;
  }

  async load(base: string = 'USD') {
    this.isLoading = true;
    this.error = null;
    try {
      const resp = await getCurrency(base);
      const items = currencyToItem(resp);
      runInAction(() => {
        this.items = items;
        this.isLoading = false;
      });
    } catch (e) {
      runInAction(() => {
        this.error = (e as Error).message;
        this.isLoading = false;
      });
    }
  }
}

export const MobXStoreContext = createContext<CurrencyMobxStore | null>(null);
