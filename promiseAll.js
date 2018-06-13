let promise1 = Promise.resolve(4);
let promise2 = Promise.resolve(5);
let promise3 = Promise.resolve(6);

promiseList = [promise1, promise2, promise3];

//returns a promise with response as list of responses of all the promises given.
let promiseAll = (promiseList) =>{
    let responses = [];
    let count = 0;
    return new Promise((resolve, reject) => {
        promiseList.forEach((promise) => {
            promise.then((response) => {
                responses.push(response);
                count += 1;
                if(count === promiseList.length){
                    resolve(responses);
                }
            }).catch((error) => reject(error));
        });
    });
}

myPromiseAll = promiseAll(promiseList);
myPromiseAll
    .then((response) => {console.log(response);});