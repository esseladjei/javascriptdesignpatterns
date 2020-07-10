class Observer {
  constructor() {
    this.Observer = [];
  }
  subscribe(fn) {
    this.Observer.push(fn);
  }
  unsubscribe(fnToRemove) {
    this.Observer = this.Observer.filter((fn) => {
      if (fn != fnToRemove) {
        return fn;
      }
    });
  }
  trigger() {
    this.Observer.forEach((fn) => {
      fn.call();
    });
  }
}
const observer = new Observer();
let observerArray = [
  function obs1() {
    console.log("I am observer 1");
  },
  function obs2() {
    console.log("I am observer 2");
  },
  function obs3() {
    console.log("I am observer 3");
  },
];
for (let index = 0; index < observerArray.length; index++) {
  const element = observerArray[index];
  observer.subscribe(element);
}
observer.unsubscribe(observerArray[1]);
observer.unsubscribe(observerArray[2]);
observer.trigger();