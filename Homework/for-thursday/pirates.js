// pirates.js

/*
create 3 properties that are set by the constructor
create 3 methods
instantiate 2 arrays of 3 pirates, 
  name the arrays after your favorite pirate ships, 
  jollyRoger and blackPearl
loop over each array and print 3 properties of each pirate
*/

class Pirate {

  diseases = ['scurvy', 'tonsilitis', 'snaggletooth'];

  constructor(name, shipsBoarded, diseases) {
    this.name = name;
    this.shipsBoarded = shipsBoarded;
    this.diseases = [...this.diseases, ...diseases];

  }

  eatAnOrange() {
    if (this.diseases.indexOf('scurvy') >= 0) {
      //remove scurvy from diseases array
      this.diseases = this.diseases.filter(d => d != 'scurvy');
      //moved makeDiseaseList into another function 
      let diseaseList = this.makeDiseaseList(this.diseases);
      return (`${this.name} is rid of the scurvy. \nRemaining diseases include: ${diseaseList}.`);
    }
    else {
      if (this.diseases.indexOf('heartburn') === 0) {
        this.diseases.unshift('heartburn');
      }
      return (`${this.name} now has heartburn.`);
    }
  }

  makeDiseaseList(list) {
    //prepare a return string-list of remaining diseases
    let diseaseList = '';

    //build return disease list, accounting for commas and final 'and'
    for (let d = 0; d < this.diseases.length; d++) {
      if (d !== this.diseases.length - 1) {
        diseaseList += d === 0 ? `${this.diseases[d]}` : `, ${this.diseases[d]}`;
      }
      else {
        diseaseList += `, and ${this.diseases[d]}`;
      }
    }
    return diseaseList;
  }

  navigatePestilentialTributary() {
    if (this.diseases.indexOf('diptheria')) {
      this.diseases.unshift('diptheria');
    }

    return `Diptheria aquired. Diseases now feature: ${this.makeDiseaseList(this.diseases)}.`;
  }

} // end class Pirate

const vowelTooth =
  new Pirate('Vowel Tooth', 5.2,
    [
      'the gank', 'twizzlers', 'oh-no-liver', 'halitosis'
    ]);

console.clear();
console.log(vowelTooth.eatAnOrange());
console.log(vowelTooth.navigatePestilentialTributary());
console.log(vowelTooth.eatAnOrange());