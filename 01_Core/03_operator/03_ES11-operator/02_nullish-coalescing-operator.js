/* 
null 병합 연산자
좌항의 피연산자가 null 또는 undefined인경우
우항의 피연산자를 반환, 그렇지 않으면 좌항의 피연산자를 반환

-> 변수에 기본 값을 설정할 때 유용하다.
*/

var test = null ?? '기본 값';

// 단축 평가로 변수에 기본값을 할당
// 빈 문자열이 Falsy 값 이기 때문에 빈 문자열도 유효하게 처리하고 싶지만
// 기본값이 대입이 되는 문제가 있었다.
// var value = '' || '기본값';

// console.log(value);

var value = ''??'기본값';
console.log(value);
