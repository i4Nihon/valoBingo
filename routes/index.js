const express = require('express');
const router = express.Router();
const socket = require('socket.io');
require("dotenv").config()

router.io = socket;

/* GET home page. */
router.get('/', function(req, res, next) {

   const io = req.app.get('io');
   res.render("index")

   io.on("login", (socket)=>{
      if (socket.data.nick.key.toUpperCase() === process.env.NICK && socket.data.nick.value === process.env.PASS){
         console.log("done")
      }
      else {
         console.log("nope")
      }
   })
});

module.exports = router;
