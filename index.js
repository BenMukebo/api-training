const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  // console.log(request, request.readystate);
  if(request.readyState === 4){
    console.log(request.responseText);
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();