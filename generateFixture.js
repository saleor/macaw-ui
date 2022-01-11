const yargs = require("yargs");
const faker = require("faker");

const argv = yargs
  .option("rows", {
    alias: "r",
    description: "Number of generated rows",
    type: "number",
  })
  .help()
  .alias("help", "h").argv;

const data = Array(argv.rows)
  .fill(0)
  .map(() => ({
    name: faker.name.findName(),
    email: faker.internet.email(),
    job: faker.name.jobType(),
  }));

console.log(JSON.stringify(data));
