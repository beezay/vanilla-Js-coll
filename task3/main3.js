/**Catching DOM Elements ****/
const dateBtn = document.getElementById('dateBtn');
const timeBtn = document.getElementById('timeBtn');
const modal = document.getElementById('display');
// const timeDisplay = document.getElementById('time-')
// const date = new Date();
let t;

const addZero = (d) => {
  if (d <= 9) {
    return "0" + d;
  }
  return d
}

// const removeTimeEvent = () => {
//   timeBtn.removeEventListener('click', getTime())
// }

const getDate = () => {

  // timeBtn.removeEventListener('click', getTime())
  clearInterval(t);

  const date = new Date();

  formatDate = `"${date.getFullYear()}-${addZero(date.getMonth() +1)}-${addZero(date.getDay())}"`;

  modal.innerHTML = `<h5>The New Date is: <span>${formatDate}</span></h5>`

  console.log('Formatted Date => ', formatDate);
}

const getTime = () => {
  const date = new Date();

  formatTime = `"${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}"`
  modal.innerHTML = `<h5>The New Time is: <span>${formatTime}</span></h5>`;
  console.log('Formatted Time => ', formatTime);
}

dateBtn.addEventListener('click', () => {
  getDate();
  console.log('Button Click');
})



timeBtn.addEventListener('click', () => {
  getTime();
  t = setInterval(getTime, 1000);
  console.log('Button Click');
})

// const timeDisplay = () => {
//   getTime();
//   setInterval(getTime, 1000);
// }