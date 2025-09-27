import type { ICurrencyApiResponse } from '../types';

const API_KEY = import.meta.env.VITE_ACCESS_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const inflight = new Map<string, Promise<ICurrencyApiResponse>>();
let cache: { key: string; data: ICurrencyApiResponse; ts: number } | null =
  null;
const TTL_MS = 60_000;

export function getCurrency(
  base: string = 'USD'
): Promise<ICurrencyApiResponse> {
  if (!API_KEY || !BASE_URL) {
    return Promise.reject(new Error('VITE_ACCESS_KEY/VITE_BASE_URL не заданы'));
  }

  const key = `${base}`;
  const now = Date.now();

  if (cache && cache.key === key && now - cache.ts < TTL_MS) {
    return Promise.resolve(cache.data);
  }

  const existing = inflight.get(key);
  if (existing) return existing;

  const p = (async () => {
    const res = await fetch(`${BASE_URL}/${API_KEY}/latest/${base}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: ICurrencyApiResponse = await res.json();
    cache = { key, data, ts: Date.now() };
    return data;
  })().finally(() => inflight.delete(key));

  inflight.set(key, p);
  return p;
}
