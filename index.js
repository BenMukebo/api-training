// https://developer.mozilla.org/fr/docs/Web/HTTP/Status

const request = new XMLHttpRequest();

function getTodos (callBack){
  request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
    callBack(undefined, data);
    } else if(request.readyState === 4) {
      callBack('could not fetch data', undefined);
    }
  });
  
//   request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.open('GET', './todos.json');

  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log('CallBack Fired');
  // console.log(err, data)
  if(err){
    console.log('could not fetch data');
  } else{
    console.log(data);

  }
});

console.log(3);
console.log(4);