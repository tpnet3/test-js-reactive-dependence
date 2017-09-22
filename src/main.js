import { Reactive } from './reactive.js';
import { Dependence } from './dependence.js';

class Main {

  constructor() {
    this.value = new Reactive(0);

    setTimeout(() => {
      console.log("==============================");
      console.log("main.js: setTimeout()");
      console.log("==============================");
      this.value.set(1000);
    }, 1000);

    Dependence.set(this, this.foo);
    this.foo();
    Dependence.set(undefined);

    Dependence.set(this, this.bar);
    this.bar();
    Dependence.set(undefined);

    Dependence.set(this, this.baz);
    this.baz();
    Dependence.set(undefined);
  }

  foo() {
    console.log("main.js: Main.foo(): " + this.value.get());
  }

  bar() {
    console.log("main.js: Main.bar(): " + this.value.get());
  }

  baz() {
    console.log("main.js: Main.baz()");
  }
}

new Main();
