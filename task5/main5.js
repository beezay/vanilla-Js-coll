let inputt = 'Hello_me23';

const input = document.getElementById('singleInput');
const errorMsg = document.getElementById('error-msg');
const successMsg = document.getElementById('success-msg');

input.addEventListener('change', () => {
    let pattern = /^[a-zA-Z0-9]*?.*(_+)[a-zA-Z0-9]*\d$/gi;
    inputVal = input.value;
    result = pattern.test(inputVal);

    if (result) {
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none'
    } else {
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block'
    }
    console.log('Result =>', result);
})