//promises

//promises are used to handle asynchronous operations in javascript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

//A Promise is in one of these states:
//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation completed successfully.
//rejected: meaning that the operation failed.
// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );

    function myDisplayer(some) {
        console.log(some);
      }
      
      let myPromise1 = new Promise(function(myResolve, myReject) {
        let x = 1;
      
      // The producing code (this may take some time)
      
        if (x == 0) {
          myResolve("OK");
        } else {
          myReject("Error");
        }
      });
      
      myPromise1.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
      );