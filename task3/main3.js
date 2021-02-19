/**Catching DOM Elements ****/
const btn = document.getElementById('timeBtn');
const modal = document.getElementById('display');

const getDate = () => {
  let date = new Date();

const addZero = (d) => {
    if(d <= 9){
      return "0" + d;
    }
    return d
  }

formatDate = `"${date.getFullYear()}-${addZero(date.getMonth() +1)}-${addZero(date.getDay())}"`;

modal.innerHTML = `<h5>The New Date is: <span>${formatDate}</span></h5>`

console.log('Formatted Date => ', formatDate);
}

btn.addEventListener('click', () => {
  getDate();
  console.log('Button Click');
})

