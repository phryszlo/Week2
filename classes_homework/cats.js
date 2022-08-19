// cats.js

/*
give the class at least 3 properties
give the class at least 3 methods
create two instances of the class (two cats)
log both instances to see their properties
invoke each method from both instances
*/

class Cat {

  constructor(name, disposition, fur, age) {
    this.name = name;
    this.disposition = disposition;
    this.fur = fur;
    this.age = age;
  }

  summarize() {
    return (`${this.name} is a ${this.age} year old ${this.disposition} ${this.fur} cat.`)
  }

  introduceDog() {
    if (this.disposition === 'ornery' ||
      this.disposition === 'cranky' ||
      this.disposition === 'mean') {
      return (`Dog introduced. ${this.name} attacks dog.`);
    }
    else if (this.disposition === 'timid' ||
      this.disposition === 'fearful') {
      return (`Dog introduced. ${this.name} dives for cover and/or leaps atop nearest elevated surface.`);
    }
    else {
      return (`Dog introduced. ${this.name} steps aside.`)
    }
  }

} // end class Cat


console.clear();

const myrtle = new Cat('Myrtle', 'ornery', 'gray', 7);
console.log(myrtle);
console.log();
console.log(myrtle.summarize());
console.log(myrtle.introduceDog());
console.log();
console.log('===================================');

const blackTommy = new Cat('Tommy', 'fearful', 'tuxedo', 6);
console.log(blackTommy);
console.log();
console.log(blackTommy.summarize());
console.log(blackTommy.introduceDog());
console.log();
console.log('===================================');

const orangeTommy = new Cat('Tommy', 'indifferent', 'orange', 6);
console.log(orangeTommy);
console.log();
console.log(orangeTommy.summarize());
console.log(orangeTommy.introduceDog());
console.log();
console.log('===================================');