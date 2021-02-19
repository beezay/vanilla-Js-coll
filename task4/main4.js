const coinName = ["Bitcoin", "DogeCoin", "Litecoin", "Ethereum", "Binance Coin"];

const coinPrice = ['$52', '$126', '$0.0526', '$232.06', '$1,909.77', '$144.048'];

let inputName = []
let indexColl = [];
let result = [];

//!!****Handling Button AND UI ******///
const singleBtn = document.getElementById('singleBtn');
const multipleBtn = document.getElementById('multipleBtn');
const singleInput = document.getElementById('singleInput');
const multipleInput = document.getElementById('multipleInput');
//??Event Listeners to Buttons
singleBtn.addEventListener('click', () => {
    table.style.display = 'none';
    singleBtn.classList.remove('btn-close-white')
    singleInput.style.display = 'block';
    multipleInput.style.display = 'none'
    multipleBtn.classList.add('btn-close-white');
    inputName = [];
})

multipleBtn.addEventListener('click', () => {
    table.style.display = 'none';
    multipleBtn.classList.remove('btn-close-white');
    singleInput.style.display = 'none';
    multipleInput.style.display = 'block';
    singleBtn.classList.add('btn-close-white')
    inputName = [];
    
})

const table = document.getElementById('table-show')
const tableBody = document.getElementById('table-body');
const noItem = document.getElementById('noItem');
//!!****Handling Inputs and Functions ******///
singleInput.addEventListener('change', () => {
    inputName = [];
    console.log('Single Input => ', singleInput.value);
    inputName.push(singleInput.value);
    output();
    displayRes();
    console.log('Result => ', result);
})

multipleInput.addEventListener('change', () => {
    inputName = [];
    console.log('Multiple Input => ', multipleInput.value);
    let inputTxt = multipleInput.value;
    inputName = inputTxt.split(',');
    output();
    displayRes();
    console.log('CheckArray=>', inputName);
})


// const search = (element) => {
//     return element.toLowerCase() === inputName.toLowerCase();
// }

const output = () => {
    // console.log('Result @ beginning=>', result)
    indexColl = [];
    result = [];
    inputName.forEach(input => {
        indexNumber = coinName.findIndex((element) => {
            return element.toLowerCase() === input.toLowerCase();
        });
        indexColl.push(indexNumber);
    })
    // console.log('Index Collection', indexColl, 'result=> ', result);

    indexColl.forEach(index => {
        result.push({
            CryptoName: coinName[index],
            CryptoPrice: coinPrice[index]
        })
        console.log('Index Loop =>', index, result)
    })
}

const displayRes = () => {
    tableBody.innerHTML = '';
    console.log('Display Res=> ', result)
    for (i = 0; i < result.length; i++) {
        res = result[i];
        if (res.CryptoName === undefined) {
            table.style.display = 'none';
            noItem.style.display = 'block';
        } else {
            noItem.style.display = 'none';
            table.style.display = 'block';
            let displayResult = `<tr>
                            <th>${res.CryptoName}</th>
                            <th>${res.CryptoPrice}</th>
                        </tr>`;
            tableBody.innerHTML += displayResult
        }
    }
}

// console.log('Result => ', result);