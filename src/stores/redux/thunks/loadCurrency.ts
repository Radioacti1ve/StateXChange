import { getCurrency } from '../../../api/getCurrency';
import { currencyToItem } from '../../../utils';
import { loadStart, loadSuccess, loadError } from '../slices/currencySlice';
import type { AppDispatch } from '../store';

export const loadCurrency =
  (base = 'USD') =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(loadStart());
      const resp = await getCurrency(base);
      dispatch(loadSuccess(currencyToItem(resp)));
    } catch (e) {
      dispatch(loadError((e as Error).message));
    }
  };
