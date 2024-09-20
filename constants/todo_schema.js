// placeholder file for response body and schema validation
const todoSchema = {
  userId: "#number", // Partial matching - ensuring these fields exist
  id: "#number",
  title: "#string",
  completed: "#boolean",
};

module.exports = todoSchema;
