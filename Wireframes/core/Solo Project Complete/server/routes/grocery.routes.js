const GroceryController = require("../controllers/grocery.controller");

module.exports = (app) => {
    app.get("/api/groceries", GroceryController.getAllGroceries);
    app.post("/api/groceries", GroceryController.createGrocery);
    app.delete("/api/groceries/:id", GroceryController.deleteGrocery);
    app.put("/api/groceries/:id", GroceryController.updateGrocery);
};
