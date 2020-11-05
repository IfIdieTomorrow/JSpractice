function Person(name,first,second){
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first+this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second);
    //super()와 같은 역할을 한다.
    this.third = third;
}

//둘 다 사용가능
PersonPlus.prototype.__proto__ = Person.prototype;
// PersonPlus.prototype = Object.create(Person.prototype);
// PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}


//프로토 타입보다는 class를 사용하자!
let kim = new PersonPlus('kim',10,20,30);
console.log("kim.sum() ",kim.sum());
console.log("kim.avg() ",kim.avg());
console.log("kim.constructor", kim.constructor);