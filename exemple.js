// Promise exemple

const getSomething = () => {
    return new Promise((resolve, reject) => {
      // resolve("some data"); // work like return, both can't work
      reject("some error"); // once on of them match automatically it's skip the following one
    });
  };
  
  // getSomething().then((data) => {
  //   console.log(data);
  // }, (err) => {
  //   console.log(err);
  // });
  
  getSomething().then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });