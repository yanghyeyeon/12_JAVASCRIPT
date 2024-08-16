// 클래스 상속

class Animal{
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    // 먹으면 살찌는
    eat(foodweight) {
        this.weight += foodweight;
        console.log(`${this.name}는 ${foodweight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
        
    }
    // 움직여서 살빼기
    move(lostweight) {
        this.weight -= lostweight;
        console.log(`${this.name}는 움직임으로 인해 ${lostweight}kg감량되어 ${this.weight}kg이 되었습니다.`);
        
    }
}

let animal = new Animal('구찌',10);

animal.eat(1);
animal.move(0.5);

// 상속은 extends 키워드를 사용한다.
class Human extends Animal {

    develop(language) {
        console.log(`${this.name}은 ${language}로 개발을 합니다`);
        
    }
}

let human = new Human('사람', 80);

console.log(human);


human.eat(1);
human.move(5);
human.develop("JavaScript");