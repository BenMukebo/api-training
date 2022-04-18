const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readystate);
    if(request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);
      // callback(undefined, request.responseText);
      let data = JSON.parse(request.responseText); // that how we take json string we receive back when we male a request to an endpoint
        callback(undefined, data);
    }
    else if(request.readyState === 4) {
      callback('could not fetch the data', undefined);
    }
  })
  
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
}

getTodos((err, data) => {
  console.log('callback fired');

  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
});

// JavaScript Callbacks W3School

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function getFile(myCallback) {
//   let req = new XMLHttpRequest();
//   req.open('GET', "mycar.html");
//   req.onload = function() {
//     if (req.status == 200) {
//       myCallback(this.responseText  + req.status);
//     } else {
//       myCallback("Error: " + req.status);
//     }
//   }
//   req.send();
// }

// getFile(myDisplayer);