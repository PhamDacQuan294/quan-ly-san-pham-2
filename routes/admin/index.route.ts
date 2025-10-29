import { Express } from "express";
import { productRoutes } from "./product.routes";

const adminRoutes = (app: Express): void => {

  app.use("/admin/products", productRoutes)
  
}

export default adminRoutes;