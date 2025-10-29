import express, { Express } from "express";
import adminRoutes from "./routes/admin/index.route";

const app: Express = express();
const port: number = 3000;

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// Admin Routes
adminRoutes(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
