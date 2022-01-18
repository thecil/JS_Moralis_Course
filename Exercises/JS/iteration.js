const cryptos = ['BTC', 'ETH', 'USDT', 'BND', 'ADA'];

const tickerToList = (tickers, isOrdered) => {
    // 1. state space
    let listType = isOrdered ? 'o' : 'u';
    let listItems = [];

    // 2. computations
    if(!Array.isArray(tickers)){
        return '';
    }
    for (let crypto of cryptos){
        listItems.push(`<li>${crypto}</li>`);
    }
    // 3. return value
    console.log(`<${listType}l>${listItems.join('')}</${listType}l>`)
    return `<${listType}l>${listItems.join('')}</${listType}l>`
}

tickerToList(cryptos, true);
tickerToList(cryptos, false);