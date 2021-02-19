class A {
    constructor(...args) {
        this.firstName = args[0];
    }

    displayA(){
        console.log('Class A=> ', this.firstName);
    }
}

class B extends A {
    constructor(...args) {
        super(...args)
        this.lastName = args[1];
    }

    displayB(){
        console.log('Class B => ');
    }
}

class C extends B {
    constructor(...args) {
        super(...args)
    }

    displayData () {
        // console.log('Arguments', ...arguments);
        let result = `FullName: ${this.firstName} ${this.lastName}`
        console.log(result);
    }
}



data = new C('Bijay','Bohora')
data.displayData();