"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_routes_1 = require("./home.routes");
const clientRoutes = (app) => {
    app.use("/", home_routes_1.homeRoutes);
};
exports.default = clientRoutes;
