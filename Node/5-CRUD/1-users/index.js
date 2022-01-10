// Imports
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { v4 as uuid } from "uuid";
import isEmail from "validator/lib/isEmail.js";

// Constants
const BUILDER_NAME = {
  describe: "User name",
  demandOption: true,
  type: "string",
};

const BUILDER_EMAIL = {
  describe: "User email",
  demandOption: true,
  type: "string",
};

// Globals
const yarg = yargs(hideBin(process.argv));

// Functions
function readFileData(fileName) {
  try {
    const fileData = fs.readFileSync(fileName);
    return JSON.parse(fileData.toString());
  } catch (err) {
    return { users: [] };
  }
}

function writeFileData(fileName, data) {
  fs.writeFileSync(fileName, JSON.stringify(data));
}

function appendUser(user) {
  const fileData = readFileData("data.json");
  fileData.users.push(user);
  writeFileData("data.json", fileData);
}

function viewUser(name) {
  const fileData = readFileData("data.json");
  const userFound = fileData.users.find((user) => user.name === name);
  userFound ? console.log(userFound) : console.log(`User ${name} not found`);
}

function viewAllUsers() {
  const fileData = readFileData("data.json");
  fileData.users.forEach((user) => console.log(user, "\n"));
}

function updateUser(name, email) {
  const fileData = readFileData("data.json");
  const userFound = fileData.users.find((user) => user.name === name);
  if (!userFound) {
    console.log(`No user ${name}`);
    return;
  }
  userFound.email = email;
  writeFileData("data.json", fileData);
}

function deleteUser(name) {
  const fileData = readFileData("data.json");
  const userIndex = fileData.users.findIndex((user) => user.name === name);
  if (userIndex === -1) {
    console.log(`No user ${name}`);
    return;
  }
  fileData.users.splice(userIndex, 1);
  writeFileData("data.json", fileData);
}

function main() {
  yarg.command({
    command: "create",
    describe: "Create a new user",
    builder: { name: BUILDER_NAME, email: BUILDER_EMAIL },
    handler: ({ name, email }) => {
      if (isEmail(email)) {
        const id = uuid();
        const user = {
          id,
          name,
          email,
        };
        console.log(`user`, user);
        appendUser(user);
      }
    },
  });
  yarg.command({
    command: "view",
    describe: "View all users / given user",
    builder: { name: { ...BUILDER_NAME, demandOption: false } },
    handler: ({ name }) => {
      if (name) {
        viewUser(name);
      } else {
        viewAllUsers();
      }
    },
  });
  yarg.command({
    command: "update",
    describe: "Update given user's properties",
    builder: {
      name: BUILDER_NAME,
      email: { ...BUILDER_EMAIL, demandOption: false },
    },
    handler: ({ name, email }) => {
      if (email && isEmail(email)) {
        updateUser(name, email);
      }
    },
  });
  yarg.command({
    command: "delete",
    describe: "Delete given user",
    builder: {
      name: BUILDER_NAME,
    },
    handler: ({ name }) => {
      deleteUser(name);
    },
  });

  yarg.parse();
}

main();
