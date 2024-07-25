// 함수 선언문

// 함수 선언문에서는 함수의 이름을 생략 불가
function hello(name) {
    return `${name}님 안녕하세요`;
};

// 함수호출
console.log(hello('홍길동'));


/* 
function hello(name) {
    return `${name}님 안녕하세요`;
};

자바스크립트 엔진은 생성된 함수를 호출하기 위해
함수 이름과 동일한 식별자를 암묵적으로 생성하고 거기에 함수 객체를 할당
var hello = function hello(name) {
    return `${name}님 안녕하세요`;
};

console.log(hello('홍길동')); -> 식별자 hello를 호출
*/