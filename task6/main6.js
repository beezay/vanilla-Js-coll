// const firstName = document.getElementById('first-name');
// const lastName = document.getElementById('last-name');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const displayClass = document.getElementById('display-class')
const btnReset = document.getElementById('btn-reset');

let fName = '';
let lName = '';

class A {
    constructor(...args) {
        this.firstName = args[0];
    }

    displayA() {
        console.log('Class A=> ', this.firstName);
    }
}

class B extends A {
    constructor(...args) {
        super(...args)
        this.lastName = args[1];
    }

    displayB() {
        console.log('Class B => ');
    }
}

class C extends B {
    constructor(...args) {
        super(...args)
    }

    displayData() {
        // console.log('Arguments', ...arguments);
        displayClass.innerHTML = `<p>The name of Person is ${this.firstName} ${this.lastName}</p>`;
        displayClass.style.display = 'block';
        btnReset.style.display = 'block';
        // let result = `FullName: ${this.firstName} ${this.lastName}`
        // console.log(result);
    }
}


firstName.addEventListener('change', () => {
    fName = firstName.value;
    // console.log(fName, lastName);
    lastName.style.display = 'block';
    lastName.addEventListener('change', () => {
        lName = lastName.value;
        console.log(fName, lName);
        data = new C(fName, lName)
        data.displayData();
    })
})

btnReset.addEventListener('click', () => {
    fName = '';
    lName = '';
    displayClass.style.display = 'none';
    lastName.style.display = 'none';
    btnReset.style.display = 'none'
})

// data = new C('Manish', 'Bohora')
// data.displayData();