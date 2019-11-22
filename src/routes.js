const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.delete("/products/:id", ProductController.delete);
routes.put("/products", ProductController.store);
routes.post("/products/:id", ProductController.update);

module.exports = routes;