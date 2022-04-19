// fetch api [2 * .then()]

// fetch('todos/locki.json').then(response => {
//   // console.log('resolved', response);
//   return response.json(); // Return promise that can either be rejected or resolve
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log('rejected', err)
// });

// async & await [ 2 * await + 1 * .then()]

const getTodos = async () => {
  const response = await fetch('todos/locki.json');

  if(response.status !== 200){
    throw new Error('can not fetch the data');
  }
  const data = await response.json();
//   console.log(data);
  return data;
};

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected', err.message)); //.message it's just for displaying the error message from the "throw new Error"