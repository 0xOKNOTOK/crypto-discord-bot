const fetch = require('node-fetch');

const requestPrice = async (coinID, message) => {
    coinID = coinID.substring(1);
    let coinPriceUSD = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinID}&vs_currencies=usd`
    ).then((res) => res.text());

    coinPriceUSD = JSON.parse(JSON.stringify(coinPriceUSD));

    coinPriceUSD = coinPriceUSD.replace(/[^0-9\.. ]/g, '').toUpperCase();

    let coinPriceBTC = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinID}&vs_currencies=btc`
    ).then((res) => res.text());

    if (coinPriceBTC === '{}' || coinPriceUSD === '{}') {
        return null;
    }
    coinPriceBTC = JSON.parse(JSON.stringify(coinPriceBTC));
    coinPriceBTC = coinPriceBTC.replace(/[^0-9\.. ]/g, '').toUpperCase();

    message.channel.send(
        `**${coinID.toUpperCase()}/USD -> ${coinPriceUSD}\n${coinID.toUpperCase()}/BTC -> ${coinPriceBTC}**`
    );
};

module.exports = requestPrice;
