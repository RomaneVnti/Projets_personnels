
const promise = Promise.reject(new Error('OH LE SOUCI'));

promise.then(console.log).catch((error) => {console.log(error.message)});