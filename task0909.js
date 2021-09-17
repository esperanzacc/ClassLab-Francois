console.log("hello");
// PRACTICE

// 1. create 2 scores for a and b
// 2. check if both 2 pass the exam,\
// logout both passed
// 3. only a pass
// logout a passed
// 4. only b pass
// logout b passed
// 5. both fail
// logout both failed
// 6. display score in all cases

//Conditional Statement
let matt = 30;
let simon = 45;

// if-else statement
let lowerLimit = 51;
if (matt > lowerLimit) {
  console.log("matt passed the test");
} else {
  console.log("matt didn't pass the test");
}
if (simon > lowerLimit) {
  console.log("simon passed the test");
} else {
  console.log("simon didn't pass the test");
}
// else-if
if (matt > lowerLimit && simon > lowerLimit) {
  console.log("matt and simon passed the test");
  console.log("matt score is", matt); // matt score is 80
  console.log("simon score is", simon);
} else if (matt < lowerLimit && simon > lowerLimit) {
  console.log("matt didn't pass the test, and simon passed the test");
  console.log("matt score is", matt);
  console.log("simon score is", simon);
} else if (matt > lowerLimit && simon < lowerLimit) {
  console.log("matt passed the test, and simon didn't pass the test");
  console.log("matt score is", matt);
  console.log("simon score is", simon);
} else {
  console.log("matt and simon didn't pass the test");
  console.log("matt got 80 points, and simon got 45 points");

  console.log("matt score is", matt);
  console.log("simon score is", simon);
}
