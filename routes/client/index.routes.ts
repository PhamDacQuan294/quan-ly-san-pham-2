import { Express } from "express";
import { homeRoutes } from "./home.routes";

const clientRoutes = (app: Express): void => {
  
  app.use("/", homeRoutes)
};

export default clientRoutes;
