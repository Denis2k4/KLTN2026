
const usersRouter = require("./users.routes");
const categoryRouter = require("./category.routes");

function routes(app) {
    app.use("/api/user", usersRouter);
    app.use("/api/category", categoryRouter);
}   

module.exports = routes;