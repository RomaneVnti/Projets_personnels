'use strict';

const promise = new Promise(function (fulfill, reject) {
    // Votre solution ici
    setTimeout(()  => {fulfill('ACCOMPLIE !');}, 300); 
  });

  // Votre solution ici
  promise.then(function(value) {console.log(value);})