/* 
논리연산자
||(OR), &&(AND), !(NOT) 의 논리연산자는 피연산자를 논리 연산한다.
*/

/* 
단축 평가(short-circuit evaluation)
표현식을 평가하는 도중 평가 결과가 확정 된 경우 나머지 평가 과정을 생략하는 것
*/

// OR, AND 연산자 표현식의 결과가 때로 불리언 값이 아닐 수 있다.

// 논리 연산의 결과를 결정한 첫번째 피연산자를 반환한다.
console.log('apple' || 'banana'); // apple
console.log(false || 'banana'); // banana


// null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때

var obj = null;
var val = obj.value; // Cannot read properties of null (reading 'value')

// obj 가 Falsy(null, undefined) 값이면 좌항만 실행하여 val -> null
// obj 가 truthy 값이면 val -> obj.value
var val = obj && obj.value;