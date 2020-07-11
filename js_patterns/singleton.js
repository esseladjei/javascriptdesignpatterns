class Singleton {
  constructor() {
    if (Singleton.instance instanceof Singleton) {
      return Singleton.instance;
    }
    this.configObject = {
      apiKey:`sdfsdfjkasfhkafafdsf`,
      rooturl: `https://github.com/`,
      version: Math.floor(Math.random() * 3200),
    };
    Object.freeze(this.configObject);
    Object.freeze(this);
    Singleton.instance = this;
  }
  getAppConfigInstance(key) {
    return this.configObject[key];
  }
}
const setting1 = new Singleton();
const setting2 = new Singleton();
const setting3 = new Singleton();
console.log(setting1);
console.log(setting2);
console.log(setting3);
console.log(setting1 === setting2 && setting2 === setting3)
console.log(setting1.getAppConfigInstance('apiKey'))
console.log(setting2.getAppConfigInstance("apiKey"));
console.log(setting3.getAppConfigInstance("apiKey"));
console.log(setting1.getAppConfigInstance("version"));
console.log(setting2.getAppConfigInstance("version"));
console.log(setting3.getAppConfigInstance("version"));