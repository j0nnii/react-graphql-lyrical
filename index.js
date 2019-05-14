const app = require("./server/server");

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log("Listening");
});
