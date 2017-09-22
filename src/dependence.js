class _Dependence {

  constructor() {
    console.log("dependence.js: Dependence.constructor");
    this.curObj;
    this.curFunc;
    this.def = {};
  }

  set(obj, func) {
    console.log("dependence.js: Dependence.set: " + typeof func + ": " + func);
    this.curObj = obj;
    this.curFunc = func;
  }

  addReactive(reactive) {
    if ( ! this.curFunc || this.def[reactive] && this.def[reactive][this.curFunc]) {
      return;
    }

    console.log("dependence.js: Dependence.addReactive: " + reactive);
    this.def[reactive] = this.def[reactive] || {};
    this.def[reactive][this.curObj] = this.def[reactive][this.curObj] || {};
    this.def[reactive][this.curObj][this.curFunc] = {
      obj: this.curObj,
      func: this.curFunc
    };
  }

  update(reactive) {
    if ( ! this.def[reactive]) {
      return;
    }

    console.log("dependence.js: Dependence.update: " + reactive);

    for (let key in this.def[reactive]) {
      for (let key2 in this.def[reactive][key]) {
        let objValue = this.def[reactive][key][key2];
        objValue.func.call(objValue.obj);
      }
    }
  }
}

export const Dependence = new _Dependence();
