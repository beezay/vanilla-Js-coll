const coinName = ["Bitcoin","DogeCoin","Litecoin","Ethereum","Binance Coin"];

const coinPrice = ['$52','$126','$0.0526','$232.06','$1,909.77','$144.048'];

let inputName = ['LiTeCoIN', 'BitCoin', 'ETHEREUM']
let indexColl = [];
let result = [];
const search = (element) => {
    return element.toLowerCase() === inputName.toLowerCase();
}

inputName.forEach(input => {
    indexNumber = coinName.findIndex((element) => {
        return element.toLowerCase() === input.toLowerCase();
    });
    indexColl.push(indexNumber);
})

indexColl.forEach(index => {
    result.push({
        CryptoName: coinName[index],
        CryptoPrice: coinPrice[index]
    })
})


console.log('Result => ', result);