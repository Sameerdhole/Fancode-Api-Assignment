const { spec } = require("pactum");

const baseURL = "http://jsonplaceholder.typicode.com";

const apiUtils = {
  /**
   * Fetches the list of users from the API.
   *
   * @returns {Object} Users Array
   * @throws {Error} If the API call does not return a status of 200.
   */
  async getUsers() {
    const users = await spec().get(`${baseURL}/users`).expectStatus(200);
    const userData = users.body;
    return userData;
  },

  /**
   * Fetches the todos for a given user based on their user ID.
   *
   * @param {string} userId - The ID of the user for whom the todos are fetched.
   * @returns {Objects} An array of todo objects.
   * @throws {Error} If the API call does not return a status of 200.
   */
  async getTodosByUserId(userId) {
    const todos = await spec()
      .get(`${baseURL}/todos?userId=${userId}`)
      .expectStatus(200);
    const todosData = todos.body;
    return todosData;
  },
};

module.exports = apiUtils;
