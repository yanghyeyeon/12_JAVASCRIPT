console.log('===== 숫자 타입으로 변환 =====');

// 산술 연산자의 피연산자는 모두 숫자여하기 때문에
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입변환한다.
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '5');
console.log(10 % 'Javscript'); // NaN - 피연산자 숫자 변환 불가로 연산 수행 불가.

// 비교 연산자로 크기를 비교하기 위해 숫자여야하기 때문에
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입변환한다.
console.log(10 > '5');

// + 단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로
// 암묵적 타입변환 수행
console.log(+''); // 0
console.log(+'1'); // 1
console.log(+'JavaScript'); // NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN
console.log(+{}); // NaN
console.log(+[]); // 0
console.log(+function(){}); // NaN
// console.log(+Symbol()); // Cannot convert a Symbol value to a number

/* 
빈 문자열, 빈 배열, null, false 는 0으로 true는 1로
객체, undefined, 함수, 문자(숫자형문자제외) 는 변환 되지 않아 NaN
*/











