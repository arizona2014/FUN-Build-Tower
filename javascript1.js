function towerBuilder(nFloors) {

  let solution = [];
  for(let i=0; i < nFloors; i++){
	solution.push(" ".repeat((nFloors - i) - 1) + "*".repeat((i*2) + 1) + " ".repeat((nFloors - i) - 1));
  }
  return solution;
}


Tests:
------

Test.assertEquals(JSON.stringify(towerBuilder(1)), JSON.stringify(["*"]));
Test.assertEquals(JSON.stringify(towerBuilder(2)), JSON.stringify([" * ","***"]));
Test.assertEquals(JSON.stringify(towerBuilder(3)), JSON.stringify(["  *  "," *** ","*****"]));

Test Results:
Test Passed: Value == '["*"]'
Test Passed: Value == '[" * ","***"]'
Test Passed: Value == '["  *  "," *** ","*****"]'
You have passed all of the tests! :)