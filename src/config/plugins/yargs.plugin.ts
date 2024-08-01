import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    //SE REQUIERE
    demandOption: true,
    describe: "Multiplication base number",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Set limit to multiply",
  })
  .option("s", {
    alias: "showTable",
    type: "boolean",
    default: false,
    describe: "Show the table on terminal",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "File Name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "Set the destination",
  })
  .check((argv, options) => {
    if (argv.b < 1) {
      throw new Error("Number must be greather than 1");
    }

    return true;
  })
  .parseSync();
