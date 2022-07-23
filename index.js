import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

routes(app);

app.get("/", (req, res) => {
  res.send(`Node and express running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Node and express running on ${PORT}`);
});
