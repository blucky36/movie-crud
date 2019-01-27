const express = require('express')
const router = express.Router()
const controller = require("../controller/controller.js")

router.get('/', controller.getMovies)
router.get("/:id",controller.getOneMovie)
router.post("/",controller.postMovie)
router.put("/:id",controller.putMovie)
router.delete("/:id",controller.deleteMovie)

module.exports = router
