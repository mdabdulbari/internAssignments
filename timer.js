const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const timer = (givenNumber) => {
  let count = givenNumber;
  const printCount = () => {
    let interval;
    console.log(count);
    count -= 1;
  }
  button1.addEventListener('click', () => {
                            interval = setInterval(printCount, 1000);
                         });
  button2.addEventListener('click', () => {
                            clearInterval(interval);
                         });
}

timer(100);