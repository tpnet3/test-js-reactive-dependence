import { Dependence } from './dependence.js';

export class Reactive {

  constructor(newValue) {
    console.log("reactive.js: Reactive.constructor: " + newValue);
    this.curValue = newValue;
  }

  get() {
    console.log("reactive.js: Reactive.get: " + this.curValue);
    Dependence.addReactive(this);
    return this.curValue;
  }

  set(newValue) {
    console.log("reactive.js: Reactive.set: " + newValue);
    this.curValue = newValue;
    Dependence.update(this);
  }
}
