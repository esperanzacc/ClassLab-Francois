//create an array
console.log("q 1");

// create students array
let students = [];
console.log("after creating student array", students);

// create an object with 3 props
const a = {
  name: "John",
  score1: 47,
  score2: 25,
};
// insert object to array
students.push(a);
console.log("after push to array", students);

const b = {
  name: "Bob",
  score1: 23,
  score2: 24,
};
students.push(b);
console.log("after push to array", students);

const c = {
  name: "Nick",
  score1: 40,
  score2: 35,
};
students.push(c);
console.log("after push to array", students);

const d = {
  name: "Alex",
  score1: 44,
  score2: 45,
};
students.push(d);
console.log("after push to array", students);

console.log("q 2");
let degrees = ["A", "B", "C", "D", "E"];
let scores = [91, 81, 71, 61, 51];
console.log("student get degree:", degrees[0], ",and get scores:", scores[0]);
console.log("student get degree:", degrees[1], ",and get scores:", scores[1]);
console.log("student get degree:", degrees[2], ",and get scores:", scores[2]);
console.log("student get degree:", degrees[3], ",and get scores:", scores[3]);

console.log("q 3");
function resultSum(score1, score2) {
  var sum;
  sum = score1 + score2;
  return sum;
}

// 1st approach to make sure the function is work or not
sum = resultSum(3, 6);
console.log("resultSum", sum);
//
console.log("q 4");

function resultExam() {
  for (var i = 0; i < students.length; i++) {
    var sum = resultSum(students[i].score1, students[i].score2);

    if (sum >= 60) {
      //pass
      console.log(students[i].name + " passed the exam.");

      for (var x = 0; x < scores.length; x++) {
        if (sum >= scores[x]) {
          console.log(
            " He has " + sum + " grades and he got a degree " + degrees[x]
          );
          break;
        }
      }
    } else {
      console.log(students[i].name + " didn't pass the exam.");
    }
  }
}
resultExam();
