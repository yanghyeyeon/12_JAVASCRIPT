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

class Deer extends Animal {

    constructor(name, weight, legLength) {

        // 상속 클래스의 생성자에서는 반드시 super(...)를 호출해야한다.
        // 또한, super(...)는 this를 사용하기 전에 반드시 호출해야한다.
        // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        // this.name = name;
        // this.weight = weight;
        // this.legLength = legLength;

        super(name, weight)
        this.legLength = legLength;
    }
}
let deer = new Deer('슬픈 눈망울의 사슴', 40, 1);
console.log(deer);
