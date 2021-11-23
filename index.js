// https://developer.mozilla.org/fr/docs/Web/HTTP/Status

function getTodos (resource, callBack){
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callBack(undefined, data);
    }
    else if(request.readyState === 4) {
      callBack('could not fetch data', undefined);
    }
  });
  
//   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.open('GET', resource);

  request.send();
};

//Nexting a request inside a callback function (data)

getTodos('todos/locki.json', (err, data) => {
  console.log('CallBack Fired');
  console.log(data)

  getTodos('todos/mariot.json', (err, data) => {
    if(err){
      console.log('could not fetch data mariot');
    }
    else{
      console.log(data);
      getTodos('todos/zengi.json', (err, data) => {
        // if(err){
        //   console.log('could not fetch data zengi');
        // }
        // else{
          console.log(data);
        // }
      });
    }
  });
});

console.log(3);
console.log(4);