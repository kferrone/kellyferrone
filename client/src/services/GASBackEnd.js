'use strict';

class GASBackEnd {
  constructor() {

  }
  getRandomNumbers() {
    return new Promise(function (resolve, reject) {
      google.script.run.withSuccessHandler(function (res) {
          resolve(res);
        })
        .withFailureHandler(function () {
          reject();
        }).getRandomNumbers();
    });
  }

  getPosts() {
    return new Promise((resolve, reject) => {
      console.log('Getting posts');
      google.script.run.withSuccessHandler((response) => {
          console.log('Success is running for posts',response);
          resolve(response);
        })
        .withFailureHandler((error) => {
          reject(error);
        }).getPosts();
    });
  }

}

export default GASBackEnd;