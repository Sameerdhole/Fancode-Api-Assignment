const { Given, Then } = require("@cucumber/cucumber");
const chai = require("chai");
const expect = chai.expect;

const apiUtils = require("../../utils/apiUtils");

let users;
let fancodeResidentUsers = [];
let usersWithTodos = [];
let todos;

Given(/^User has the todo tasks$/, { timeout: 2 * 5000 }, async function () {
  users = await apiUtils.getUsers();
  expect(users).to.be.an("array").that.is.not.empty;

  for (const user of users) {
    todos = await apiUtils.getTodosByUserId(user.id);
    expect(todos).to.be.an("array");

    // Filter users based on if the todos array length is greater than 0
    if (todos.length > 0) {
      usersWithTodos.push(user);
    }
  }
  expect(usersWithTodos).to.be.an("array").that.is.not.empty;
});

Given(/^User belongs to the city FanCode$/, { timeout: 2 * 5000 }, function () {
  fancodeResidentUsers = usersWithTodos.filter((user) => {
    const { lat, lng } = user.address.geo;
    return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;
  });
  // Checks if there are any fancode residents else will throw error at this point itself
  expect(fancodeResidentUsers).to.be.an("array").that.is.not.empty;
});

Then(
  /^User Completed task percentage should be greater than 50%$/,
  { timeout: 2 * 5000 },
  async function () {
    for (const user of fancodeResidentUsers) {
      todos = await apiUtils.getTodosByUserId(user.id);
      expect(todos).to.be.an("array").that.is.not.empty;

      const completedTasks = todos.filter((todo) => todo.completed).length;
      const completionRate = (completedTasks / todos.length) * 100;
      expect(completionRate).to.be.greaterThan(50);
    }
  }
);
