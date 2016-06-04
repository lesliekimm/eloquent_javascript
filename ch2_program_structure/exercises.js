// looping a traingle
for (var i = 1; i < 8; i++) {
  console.log("#".repeat(i));
}

// fizzbuzz
for (var i = 1; i < 101; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log("FizzBuzz");
    }
    else {
      console.log("Fizz");
    }
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}

// chessboard
var size = 13;

var str1 = "# ".repeat(size/2);
if (size % 2 == 1) {
  str1 = str1.concat("#");
}

var str2 = " #".repeat(size/2);
if (size % 2 == 1) {
  str2 = str2.concat(" ");
}

for (var i = 0; i < size; i++) {
  if (i % 2 == 0) {
    console.log(str1);
  }
  else {
    console.log(str2);
  }
}