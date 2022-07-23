import express from "express";
import routes from "./src/routes/crmRoutes";

const app = express();
const PORT = 4000;

routes(app);

app.get("/", (req, res) => {
  res.send(`Node and express running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Node and express running on ${PORT}`);
});
