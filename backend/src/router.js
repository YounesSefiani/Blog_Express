const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

const articleControllers = require("./controllers/articleControllers");
const validateArticle = require("./validators/validateArticle");

// Route to get a list of articles
router.get("/article", articleControllers.browse);

// Route to get a specific article by ID
router.get("/article/:id", articleControllers.read);

// Route to add a new article
router.post("/article", validateArticle, articleControllers.add);

/* ************************************************************************* */

const authorControllers = require("./controllers/authorControllers");

// Route to get a list of articles
router.get("/author", authorControllers.browse);

// Route to get a specific article by ID
router.get("/author/:id", authorControllers.read);

// Route to add a new article
router.post("/author", authorControllers.add);

module.exports = router;
