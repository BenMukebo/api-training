// https://developer.mozilla.org/fr/docs/Web/HTTP/Status

// PROMISE REAL CASE 

// function getTodos (resource){
//   return new Promise ((resolve, reject) => {
//     const request = new XMLHttpRequest();
  
//     request.addEventListener('readystatechange', () => {
//       if(request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       }
//       else if(request.readyState === 4) {
//         reject('error getting resource');
//       }
//     });

//     request.open('GET', resource);
//     request.send();
//   });
  
// };

// getTodos('todos/locki.json').then(data => {
//   console.log('promise 1 resolved:', data);
//   return getTodos('todos/mariot.json');
// }).then(data => {
//   console.log('promise 2 resolved:', data);
//   return getTodos('todos/zengi.json');
// }).then(data => {
//   console.log('promise 3 resolved:', data);
// }).catch(err => {
//   console.log('promise rejcted:', err);
// });



let p = new Promise((resolve, reject) => {

  let a = 2 + 1;

  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then(message => {
  console.log('Good this is a then ' + message);
}).catch(message => {
  console.log('Bad This is a catch' + message);
});

