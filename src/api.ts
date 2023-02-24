export function fetchCoins() {
  return fetch(
    'https://ohlcv-api.nomadcoders.workers.dev?=coinId=btc-bitcoin'
  ).then((response) => response.json());
}
