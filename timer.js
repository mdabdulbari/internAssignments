const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const timer = (givenNumber) => {
  let count = givenNumber;
  const printCount = () => {
    if(count === 1){
        clearInterval(interval)
    }
    console.log(count);
    count -= 1;
  }
  let interval;
  button1.addEventListener('click', () => {
                            interval = setInterval(printCount, 1000);
                         });
  button2.addEventListener('click', () => {
                            clearInterval(interval);
                         });
}

timer(100);