'use strict';



class MockBackEnd {
  constructor() {

  }
  getRandomNumbers() {
    return this.later([12, 33, 45, 2, 3, 11, 56, 66]);
  }
  getPosts() {
    return this.later([{
      id: '123',
      title: 'A tester Poster',
      content: `<p>Hello everyone! I am some post content.</p>`,
      published: 'December 25, 2018 at 5:09:00 PM UTC-7',
      updated: 'March 10, 2019 at 9:29:15 PM UTC-6',
    },{
      id: '456',
      title: 'The Votes are in',
      content: `<p>Who Won?</p>`,
      published: 'December 25, 2018 at 5:09:00 PM UTC-7',
      updated: 'March 10, 2019 at 9:29:15 PM UTC-6',
    }]);
  }
  later(value) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(value);
      }, 500);
    });
  }
};

export default MockBackEnd;