## 객체의 사용

```javascript
// 배열
const memberArray = ["egoing", "graphittie", "leezhce"];
console.log("memberArray[2]", memberArray[2]);

// 객체의 정의
const memberObject = {
  manager: "egoing",
  developer: "graphittie",
  designer: "leezhce",
};
memberObject.designer = "leezche";

// 객체의 데이터에 접근
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject["designer"]);

// 객체 멤버의 삭제
delete memberObject.manager;
console.log("after delete memberObject.manager", memberObject.manager);
```

1. 배열은 []으로 데이터에 접근
2. 객체는 . 이나 ['{속성명}'] 으로 접근
3. 멤버 삭제시 delete 객체.멤버

## 객체에서의 반복문 사용

```javascript
const memberArray = ["egoing", "graphittie", "leezche"];

// 배열에서의 반복문
console.group("array loop");
let i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i++;
}
console.groupEnd("array loop");

const memberObject = {
  manager: "egoing",
  developer: "graphittie",
  designer: "leezche",
};

// 객체에서의 반복문 (for-in 문)
console.group("object loop");
for (let name in memberObject) {
  console.log(name, memberObject[name]);
}
console.groupEnd("object loop");
```

## this

```javascript
const kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
});
console.log(kim.sum());
```

this : this가 언급된 메소드가 속해있는 객체를 가리킨다.
(위의 예제에서는 this=kim)

## Constructor Function

```javascript
Car = function (color, power) {
  this.color = color;
  this.power = power;
  this.desc = function () {
    return `색은 ${this.color}, 마력은 ${this.power} 입니다.`;
  };
};
car = new Car("red", 10);
console.log(car.desc());
```

output :

```
Car { color: 'red', power: 10, desc: [Function (anonymous)] }
색은 red, 마력은 10 입니다.
```

## Prototype

```javascript
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return "prototype : " + (this.first + this.second);
};

const kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "this : " + (this.first + this.second);
};
const lee = new Person("lee", 10, 10);

console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
```

output :

```
kim.sum() this : 30
lee.sum() prototype : 20
```

1. JavaScript 는 메서드를 실행 할 때 해당 개체가 자체적으로 해당 메서드를 가지고 있는지 조회 한 후 가지고 있지 않을 시 Prototype 에서 조회한다.
   (우선순위 : 객체 자체 메서드 > Prototype)

2. Prototype 의 이점
   - 하나만 있어도 되는 메서드를 Prototype에서 한번만 정의함으로써 객체의 생성 시간을 줄일 수 있다.
   - 위와 마찬가지의 이유로 메모리도 절약할 수 있다.
