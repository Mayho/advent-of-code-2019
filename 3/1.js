const fs = require("fs");

// [ '#1', '@', '306,433:', '16x11' ]
// to
// {
//   id: "1",
//   fromLeft: "306",
//   fromTop: "433",
//   length: "16",
//   width: "11"
// }
const transformStringToObject = (splitString, _i, _array) => ({
  id: splitString[0].split("#")[1],
  fromLeft: splitString[2].split(",")[0],
  fromTop: splitString[2].split(",")[1].split(":")[0],
  length: splitString[3].split("x")[0],
  width: splitString[3].split("x")[1]
});

const formatInput = input =>
  input
    .toString()
    .split("\n")
    .map(string => string.split(" "))
    .map(transformStringToObject);

const main = () => {
  const input = fs.readFileSync("./input");

  const data = formatInput(input);

  console.log(data[0]);
};

main();
