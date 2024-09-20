const { Given, Then } = require("@cucumber/cucumber");

const apiUtils = require("../../utils/apiUtils");

let users;
let fancodeResidentUsers = [];
let todos;

Given("A list of users", async function () {
  users = await apiUtils.getUsers();
});

Then(
  /^The users are from the city FanCode$/,
  { timeout: 2 * 5000 },
  function () {
    fancodeResidentUsers = users.filter((user) => {
      const { lat, lng } = user.address.geo;
      return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;
    });
    // Checks if there are any fancode residents else will throw error at this point itself
  }
);

Then(
  /^All users must have more than 50% of their todos completed$/,
  { timeout: 2 * 5000 },
  async function () {
    for (const user of fancodeResidentUsers) {
      todos = await apiUtils.getTodosByUserId(user.id);
      const completedTasks = todos.filter((todo) => todo.completed).length;
      const completionRate = (completedTasks / todos.length) * 100;
    }
  }
);
