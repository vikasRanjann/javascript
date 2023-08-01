//import filesystem
//sync way
const fs = require("fs");

// console.log(`=============== starting reading file ===========`);
// const data = fs.readFileSync("./data.txt");
// console.log(`data :${data}`);

// console.log(`============= starting calculation start ===============`);
// const mult = 68788657 * 58866998;
// console.log(mult);

fs.readFile("./data.txt", (error, data) => {
  console.log(`data reading started`);
  console.log(`data :${data}`);

  console.log(`calculation started `);
  const mult = 5675796007 * 18790780988;
  console.log(mult);
});
