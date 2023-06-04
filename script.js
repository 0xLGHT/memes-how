// script.js

// Fetches the current Ethereum and Bitcoin prices in USD
async function fetchCryptoPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();
    document.getElementById('btc-price').textContent = `BTC: $${data.bitcoin.usd}`;
    document.getElementById('eth-price').textContent = `ETH: $${data.ethereum.usd}`;
}

// Fetches the current Gwei price for Ethereum gas
async function fetchGweiPrice() {
    const response = await fetch('https://ethgasstation.info/api/ethgasAPI.json');
    const data = await response.json();
    document.getElementById('gwei').textContent = `GWEI: ${data.average / 10}`;
}

// Gets the current UTC time in military format
function getUTCTime() {
    const now = new Date();
    const utcTime = now.toISOString().substring(11, 16);
    document.getElementById('utc-time').textContent = `UTC: ${utcTime}`;
}

// Fetch data every minute
setInterval(fetchCryptoPrices, 60 * 1000);
setInterval(fetchGweiPrice, 60 * 1000);
setInterval(getUTCTime, 60 * 1000);

// Fetch data immediately on page load
fetchCryptoPrices();
fetchGweiPrice();
getUTCTime();
