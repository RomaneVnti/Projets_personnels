const promise = new Promise(function (fulfill, reject) {
    setTimeout(()  => {reject(new Error('REJET !'));}, 300); 
    // Votre solution ici
  });

  function onReject (error) {
    // Votre solution ici
   console.log(error.message);
  }
 
  promise.then(null, onReject)