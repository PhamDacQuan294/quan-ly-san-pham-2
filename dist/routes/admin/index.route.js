"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_routes_1 = require("./product.routes");
const adminRoutes = (app) => {
    app.use("/admin/products", product_routes_1.productRoutes);
};
exports.default = adminRoutes;
