// Async Prorgraming

// Callback
// Promises
// generator

// document.addEventListener('copy')

// Promises
// -> Pending
// -> Resolve
// -> Reject

const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("token");
      }, 1000);
    });
  };
  
  const reciepes = (token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject(`recipes ${token}`);
      }, 2000);
    });
  };
  
  const ingrediants = (token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject(`ingrediants ${token}`);
      }, 1000);
    });
  };
  
  const steps = (token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject(`steps ${token}`);
      }, 1000);
    });
  };
  
  // ES6
  const getData = async () => {
    try {
      console.time("async");
      const loginRes = await login();
      const res = await Promise.any([
        reciepes(loginRes),
        ingrediants(loginRes),
        steps(loginRes),
      ]);
      console.log(res);
      // const recipesRes = await reciepes(loginRes);
      // const ingrediantsRes = await ingrediants(loginRes);
      // const stepsRes = await steps(loginRes);
      console.log(loginRes);
      // console.log(recipesRes);
      // console.log(ingrediantsRes);
      // console.log(stepsRes);
      console.timeEnd("async");
    } catch (error) {
      console.log(error);
    }
  };
  
  getData();
  
  // callback hell
  // vanila javascript
  // login()
  //   .then((res) => {
  //     console.log(res);
  //     reciepes(res)
  //       .then((res1) => {
  //         console.log(res1);
  
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  
  // p1().then((value) => {
  //     console.log(value);
  // }).catch(err => {
  //     console.log(err);
  // })
  
  // async code
  // console.log('s1');
  // setTimeout(() => {
  //     console.log('a1');
  // }, 1.1)
  // for (let index = 0; index < 10; index++) {
  //     console.log(index);
  // }
  // console.log('s2');
  // setTimeout(() => {
  //     console.log('a2');
  // }, 3000)
  // console.log('s3');
  // setTimeout(() => {
  //     console.log('a3');
  // }, 1)
  