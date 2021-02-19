let input = 'Hello_me23';


let pattern = /^[a-zA-Z0-9]*?.*(_+)[a-zA-Z0-9]*\d$/gi;

result = pattern.test(input);

console.log('Result =>', result);