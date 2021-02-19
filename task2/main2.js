const input = '';

/**** Getting DOM ELEMENTS ******/
const inputTxt = document.getElementById('search-input')
const pal = document.getElementById('pal');
const notPal = document.getElementById('not-pal');
const err = document.getElementById('err');
/**
 * Defining PALINDROME FUNCTIONS
 */
//?? String Check Palindrome

const palindromeStr = (string) => {
    console.log('From String Function=> ', string);
    let length = string.length;
    let reversed = '';
    for (let i = length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    if (string.toLowerCase() == reversed.toLowerCase()) {
        pal.style.display = 'block';
        notPal.style.display = 'none';
        err.style.display = 'none'
        console.log('Palindrome');
    } else {
        pal.style.display = 'none';
        notPal.style.display = 'block';
        err.style.display = 'none'
        console.log('Not a Palindrome');
    }
    console.log(reversed);
}


//?? Number Check Palindrome
const palindromeNumber = (number) => {
    console.log('From Input Function => ', number);

    //* calling string function to check palindrome
    stringedNumber = number.toString();
    palindromeStr(stringedNumber);


    // let inputNumber = number;
    // let newNumber = 0;
    // while (inputNumber != 0 ) {
    //     newNumber = (newNumber * 10) + (inputNumber % 10);
    //     inputNumber = parseInt(inputNumber / 10);
    // }
    // if(newNumber === number) {
    //     console.log('Number Given is Palindrome');
    // }
    // else {
    //     console.log('Number Given is not Palindrome');
    // }
}

/**** EVENT FOR INPUTS ****/
inputTxt.addEventListener('input', (e) => {

    e.preventDefault();

    const input = inputTxt.value;
    const inputVal = input.trim()
    console.log('Input user => ', inputVal, input);
    /**
     * Condition for String And Number
     */
    if (!input) {
        pal.style.display = 'none';
        notPal.style.display = 'none';
        err.style.display = 'block'
        console.log('No Input');
    } else {
        if (typeof(input) === 'string' || typeof(input) === 'number' ) {
            let check = parseInt(input);
            if (isNaN(check)) {
                console.log('Input is String', input);
                palindromeStr(input);
            } else {
                console.log('Input is Number');
                palindromeNumber(check);
            }
        } else {
            pal.style.display = 'none';
            notPal.style.display = 'none';
            err.style.display = 'block'
            console.log('Wrong Input');
        }
    }


})