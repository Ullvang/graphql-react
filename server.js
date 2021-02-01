const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log("Listening on port " + port);
});
