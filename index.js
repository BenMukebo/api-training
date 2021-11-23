// https://developer.mozilla.org/fr/docs/Web/HTTP/Status

function getTodos (resource){
  return new Promise ((resolve, reject) => {
    const request = new XMLHttpRequest();
  
    request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        // callBack(undefined, data);
        resolve(data);
      }
      else if(request.readyState === 4) {
        // callBack('could not fetch data', undefined);
        reject('error getting resource');
      }
    });
      // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
      request.open('GET', resource);
      request.send();
  });
  
};

//Nexting a request inside a callback function (data)
// getTodos('todos/locki.json', (err, data) => {
//   console.log('CallBack Fired');
//   console.log(data)
// });

getTodos('todos/locki.json').then(data => {
  console.log('promise resolved:', data);
}).catch(err => {
  console.log('promise rejcted:', err)
});

