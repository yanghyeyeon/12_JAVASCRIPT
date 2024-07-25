/* 
옵셔널 체이닝 연산자
좌항의 피연산자가 null 또는 undefined인 경우
undefined를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

=> 참조될 대상이 존재하는지 불확실할때 검증하는 역할로 사용
*/

var obj = null;
// let val = obj.value; // Cannot read properties of null

var val = obj?.value;
console.log(val);


console.log("-------------------");

// var obj2 = '';
// var val2 = obj2 && obj2.length;
// // falsy 값에 따라 결과가 바뀜 ''
// console.log(val2);


console.log("-------------------");

var str = ''

var len = str?.length;

console.log(len);
// 빈 문자열은 null 또는 undefined가 아니므로 문자열의 길이 값이 담긴다.

