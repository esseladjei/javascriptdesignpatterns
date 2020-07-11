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
  trigger(name) {
    this.Observer.forEach((fn) => {
      fn(name);
    });
  }
}
const observer = new Observer();
let observerArray = [
  function obs1(name) {
    console.log(`${name} is calling from observer 1`);
  },
  function obs2(name) {
       console.log(`${name} is calling from observer 2`);
  },
  function obs3(name) {
        console.log(`${name} is calling from observer 3`);
  },
];
for (let index = 0; index < observerArray.length; index++) {
  const selectedFunction = observerArray[index];
  observer.subscribe(selectedFunction);
}
observer.unsubscribe(observerArray[1]);
observer.trigger("Essel");