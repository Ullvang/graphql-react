const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
require("dotenv-flow").config();

const port = process.env.PORT || 4000;

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV.trim() === "development",
  })
);

app.listen(port, () => {
  console.log(process.env.NODE_ENV.trim() == "development");
  console.log(process.env.URL);
  console.log("Listening on port " + port);
});
