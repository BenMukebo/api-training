// fetch api

// fetch('todos/locki.json').then(response => {
//     console.log('resolved', response);
//     return response.json(); // Return promise that can either be rejected or resolve
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log('rejected', err)
// });

// async & await

const getTodos = async () => {
  const response = await fetch('todos/locki.json');
  const data = await response.json();
//   console.log(data);
  return data;
};

getTodos()
  .then(data => console.log('resolved:', data));