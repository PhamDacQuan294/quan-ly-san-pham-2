import { Request, Response } from "express";

// [GET] /admin/products
export const index = async (req: Request, res: Response) => {
  res.render("admin/pages/products/index");
}