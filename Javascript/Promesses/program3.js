const promise = new Promise(function (fulfill, reject) {
    // Votre solution ici
    fulfill("J'AI ETE APPELEE");
    reject(new Error("JE N'AI PAS ETE APPELEE")); 
  });
 
  function onRejected(error){
    console.log(error.message);
  }

  promise.then(console.log, onRejected);
  
