import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const BUILDER = {
  first: {
    describe: "First argument",
    demandOption: true,
    type: "number",
  },
  second: {
    describe: "Second argument",
    demandOption: true,
    type: "number",
  },
};

const yarg = yargs(hideBin(process.argv));

yarg.command({
  command: "add",
  describe: "Sum two numbers",
  builder: BUILDER,
  handler: function ({ first, second }) {
    console.log(first + second);
  },
});

yarg.command({
  command: "sub",
  describe: "Subtract two numbers",
  builder: BUILDER,
  handler: function ({ first, second }) {
    console.log(first - second);
  },
});

yarg.command({
  command: "mult",
  describe: "Multiply two numbers",
  builder: BUILDER,
  handler: function ({ first, second }) {
    console.log(first * second);
  },
});

yarg.command({
  command: "pow",
  describe: "Exponentiate two numbers",
  builder: BUILDER,
  handler: function ({ first, second }) {
    console.log(first ** second);
  },
});

yarg.parse();
