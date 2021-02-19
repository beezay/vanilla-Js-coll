let date = new Date();

const addZero = (d) => {
    if(d <= 9){
      return "0" + d;
    }
    return d
  }

formatDate = `"${date.getFullYear()}-${addZero(date.getMonth() +1)}-${addZero(date.getDay())}"`

console.log('Formatted Date => ', formatDate);
