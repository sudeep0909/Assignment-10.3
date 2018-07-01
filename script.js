/* 
JavaScript program which JavaScript function printTimesTable
which prints times (till 10) table for given number as input.. 
*/

class Dog { 
    constructor(name) {
        this.dogName = name;
    }
    // methode 
    speak() {
        console.log(this.dogName + ' woof!!! ');
    }
}

// class Labrador inherits parent class Dog here
class Labrador extends Dog {  
    constructor(dogName, color, breedWeight) {
        super('Doverman');
        this.color = color;
        this.breedWeight = breedWeight;        
    }
    speak(){  
        super.speak();  
        console.log("My breed color: " + this.color + "lb.");
        console.log("My breed weight: " + this.breedWeight + "lb.");   
        console.log('Labrador says WOOF!!!');
        }
}
  
var lab = new Labrador('Labrador', 'brown', 12);
lab.speak(); 
