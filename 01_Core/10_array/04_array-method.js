/* 
Array.prototype.push : 배열의 맨 뒤에 요소를 추가
Array.prototype.pop : 배열의 맨 뒤에 요소를 제거
*/

const chineseFood = ['짜장면','짬뽕','우동'];

console.log('------------- push ------------');
console.log(`push 전 chineseFood : ${chineseFood}`);

// chineseFood.push('탕수육');
// chineseFood.push('양장피');
chineseFood.push('탕수육','양장피');

console.log(`push 후 chineseFood : ${chineseFood}`);

console.log('------------------ pop -----------------');

console.log(`chineseFood.pop() : ${chineseFood.pop()}`);
console.log(`chineseFood.pop() : ${chineseFood.pop()}`);
console.log(`chineseFood.pop() : ${chineseFood.pop()}`);


console.log(`pop 후 chineseFood : ${chineseFood}`);


// Array.prototype.unshift : 배열의 맨 앞에 요소 추가
// Array.prototype.shift : 배열의 맨 앞 요소 제거 후 반환

const chickenList = ['양념치킨','후라이드','파닭'];

console.log('------------ unshift -------------');

console.log(`unshift 전 chicckenList : ${chickenList}`);

chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');

console.log(`unshift 후 chicckenList : ${chickenList}`);

console.log('--------------- shift -----------------');


console.log(`chickenList.shift() : ${chickenList.shift()}`);
console.log(`chickenList.shift() : ${chickenList.shift()}`);
console.log(`chickenList.shift() : ${chickenList.shift()}`);

console.log(`shift 후 chicckenList : ${chickenList}`);


console.log('----------------- concat ------------------');
// Array.prototype.concat : 두개 이상의 배열을 결합
const idol1 = ['아이브','오마이걸'];
const idol2 = ['트와이스','레드벨벳'];
const idol3 = ['블랙핑크','에스파'];

//배열명 .concat(배열명1, 배열명2, ...)
const mix = idol1.concat(idol2); // idol1 기준으로 합쳐짐
const mix2 = idol3.concat(idol1, idol2); // idol3 기준으로 합쳐짐

console.log(`${mix}`);
console.log(`${mix2}`);

console.log('--------------- slice ----------------');
// Array.prototype.slice : 배열의 요소 선택 잘라내기

const front = ['HTML','CSS','JabaScript','jQuery'];

// slice(시작 인덱스, 종료 인덱스)
console.log(`front.slice(1,3) : ${front.slice(1,3)}`);
console.log(`front : ${front}`);

