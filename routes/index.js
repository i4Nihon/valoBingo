const express = require('express');
const router = express.Router();
const ComfyJS = require("comfy.js");
require("dotenv").config()

const channels = ['Nihonik']
const regex = /^[1-16]$/;

router.get('/', function (req, res, next) {
  const io = req.app.get('socketio');

  ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if ((flags.broadcaster || flags.mod || flags.vip) && command.toLowerCase() === "bingo" && (extra.sinceLastCommand.any > 1000 || extra.sinceLastCommand.any === 0)) {
      const split = message.split(" ")
      switch (split[0]) {
        case "stan":
          if (regex.test(split[1])) {
            io.emit('filedId', split[1])
            ComfyJS.Say(`zmieniono stan kafelka ${split[1]}`, extra.channel)
          } else {
            ComfyJS.Say("poprawny format '!bingo stan [1-16]'", extra.channel)
          }
          break;
        case "refresh":

          break;
        case "odswiez":

          break;
        default:
          ComfyJS.Say("Użycie to: !bingo [stan|refresh|odswiez] [on|off]", extra.channel)
          break;
      }

    }
  }

  res.render("index")
});

ComfyJS.Init(process.env.NICK, process.env.PASS, channels)



module.exports = router;
