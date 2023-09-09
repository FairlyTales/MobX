import { makeAutoObservable, runInAction } from 'mobx';

class Counter {
  count = 0;
  todo: any = {};

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }

  fetchTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        runInAction(() => {
          this.todo = json;
          console.log(json);
        });
      });
  }
}

export default new Counter();
