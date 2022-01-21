
class Info{
    constructor(name,year){
        this.name = name;
        this.year = year; 
    }

    calculateAge(){
        return `Hi, Im `+ this.name +' Age is: '+ (new Date().getFullYear() - this.year);
    }

    sayHi(place){
        return this.name + ` go to ${place}`
    }
}




class Car extends Info{
    goCar(){
            return `Car go`;
    }
}


const newInfo = new Info("Ferid", 2005);
const newCar = new Car("Nihat", 1998);

// console.log(newInfo.calculateAge());
// console.log(newInfo.sayHi('School'));
console.log(newCar.calculateAge());

