



const firstPromise = first();

const secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);