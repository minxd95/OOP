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
