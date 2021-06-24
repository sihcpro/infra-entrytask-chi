const express = require("express");

const app = express();

app.get("/env", (req, res) => {
  const envFirstName = process.env.FIRST_NAME || "N/A";
  const envLastName = process.env.LAST_NAME || "N/A";
  const envSecret = process.env.SECRET || "N/A";
  res
    .status(200)
    .send(
      `<h1>First name: ${envFirstName}</h1>
       <h1>Last name: ${envLastName}</h1>
       <h1>Secret: ${envSecret}</h1>`
    );
});

app.get("*", (req, res) => {
  res.status(200).send("<h1>Hello World</h1>");
});

const PORT = process.env.PORT | "8000";
app.listen(PORT, () => {
  console.log("Listen on port: " + PORT);
});
