const infoArr = [{
    Id: 1,
    EmployeeName: "RAjesh",
    Age: 28
}, {
    Id: 2,
    EmployeeName: "Suman",
    Age: 24
}, {
    Id: 3,
    EmployeeName: "Bhuban",
    Age: 28
}, {
    Id: 4,
    EmployeeName: "Anamika",
    Age: 32
}, {
    Id: 5,
    EmployeeName: "Shree",
    Age: 29
}, {
    Id: 6,
    EmployeeName: "Marco",
    Age: 23
}, {
    Id: 7,
    EmployeeName: "GanEsh",
    Age: 25
}, {
    Id: 8,
    EmployeeName: "Dhriti",
    Age: 31
}]

const filteredArr = [];

//Getiing Inputs from User
let input1 = 'a';
let input2 = 'e';

//!! Lowercased Inputs Obtained
let check1 = input1.toLowerCase();
let check2 = input2.toLowerCase();

//  Looking for Particular Inputs 
const  searchChar = (person) => {
    searchName = (person.EmployeeName).toLowerCase();
    console.log('name=>', person.EmployeeName, searchName);
    if (searchName.includes(check1) && searchName.includes(check2) && person.Age > 25) {

        let data = {
            id: person.Id,
            name: person.EmployeeName
        }
        filteredArr.push(data);

    }
}

infoArr.forEach(person => {
   searchChar(person);
})

console.log('Filtered=> ', filteredArr);