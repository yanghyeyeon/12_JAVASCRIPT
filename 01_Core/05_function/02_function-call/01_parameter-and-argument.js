// 매개변수와 인수

function hello(name) {

    // 매개변수는 함수 몸체 내부에서만 참조 할 수 있다.
    console.log(name);

    // 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
    console.log(arguments);
    
    return `${name}님 안녕하세요!~`;
}

console.log(hello('홍길동'));

// 함수는 매개변수의 개수와 인수의 개수가 일치하는 체크하지 않는다.
// 인수가 부족해서 할당되지 않은 매개변수의 값은 undefined 이다.
var result = hello();
console.log(result);


// 매개변수보다 인수가 더 많은 경우 초과된 인수는 무시된다.
// 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
result = hello('홍길동', '유관순');
console.log(result);

function hello2(name = '아무개') {

    // 인수를 전달하지 않았을 경우, undefined를 전달했을경우
    // ES6에서 도입된 매개변수 기본값을 사용 할 수 있다.
    console.log(name);

    console.log(arguments);

    if(arguments.length !== 1 || typeof name !== 'string' || name.length === 0) {
        throw new TypeError(
            '인수는 1개여야 하고, 문자열 값이며, 빈 문자열을 허용하지 않습니다.'
        )
    }
    
    return `${name}님 안녕하세요!~`;
}
// var result = hello2();
// console.log(result);

console.log("========== type error 발생확인 ===========");
// result = hello2('홍길동', '유관순');
result = hello2(1)

/* 
매개변수의 최대 개수에 대해 명시적인 제한은 없다.
하지만 이상적인 함수는 한가지의 일만 해야하며 가급적 작게 만들어야 한다.
따라서 최대 3개 이상을 넘지 않는것을 권장한다.
*/