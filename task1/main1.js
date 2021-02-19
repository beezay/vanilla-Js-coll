const personArray = [{
    Id: 1,
    EmployeeName: "Rajesh",
    Age: 22
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
    EmployeeName: "Ganesh",
    Age: 25
}, {
    Id: 8,
    EmployeeName: "Dhriti",
    Age: 31
}, {
    Id: 9,
    EmployeeName: "Bijay",
    Age: 25
}]


/***Getiing DOM ELEMENT *****/
const showList = document.getElementById('show-list')
const tableBody = document.getElementById('table-body')

/**** Getting Input Field from User */
const input = document.getElementById('search-input');

const displayData = () => {
    // showList.style.display = 'block';
    tableBody.innerHTML = ''
    for (let i = 0; i < personArray.length; i++) {
        item = personArray[i];
        data = `<tr>
               <td> ${item.Id} </td>             
               <td> ${item.EmployeeName} </td>             
               </tr>`;
        tableBody.innerHTML += data
    }
}

displayData();

/***Disabling Input Field after Single Input ******/
input.addEventListener('input', () => {
    // if(input.value){
    //     input.setAttribute('disabled', 'disabled')
    // }
    const filteredArr = [];
    const searchStr = input.value.charAt(0)
    if (searchStr !== ' ') {
        /*** Validating The search string using Regex ********/
        // const patt = `/${searchStr}/gi`;
        // console.log('patt=> ', patt);

        const searchChar = (person) => {
            // console.log('name=>', person.EmployeeName.includes(searchStr));
            let check = person.EmployeeName.toLowerCase()
            if (check.includes(searchStr.toLowerCase())) {
                let data = {
                    id: person.Id,
                    name: person.EmployeeName
                }
                filteredArr.push(data);
            }
            // } else {
            //     let data = {
            //         id: person.Id,
            //         name: person.EmployeeName
            //     }
            //     filteredArr.push(data);
            // }
        }

        personArray.forEach(person => {
            searchChar(person);
        })


    }

    let data = ''
    if (filteredArr.length < 0) {
        displayData();
    } else {
        // showList.style.display = 'block';
        tableBody.innerHTML = ''
        for (let i = 0; i < filteredArr.length; i++) {
            item = filteredArr[i];
            data = `<tr>
                   <td> ${item.id} </td>             
                   <td> ${item.name} </td>             
                   </tr>`;
            tableBody.innerHTML += data
        }

    }
    // console.log('Filtered=> ', filteredArr, data);
})