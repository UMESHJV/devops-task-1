
const test = require("node:test");
const assert = require("node:assert");
const server = require("./app");

test("GET / returns the expected welcome message", async (t) => {
  await new Promise((resolve) => {
    if (server.listening) {
      resolve();
    } else {
      server.once("listening", resolve);
    }
  });

  const response = await fetch("http://127.0.0.1:3000/");
  const body = await response.text();

  assert.strictEqual(response.status, 200);
  assert.strictEqual(
    body,
    "Hello from my DevOps CI/CD internship project!\n"
  );

  server.close();
});
