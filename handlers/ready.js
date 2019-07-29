const {bot} = require('../index');
const config = require("../config.json");
const moment = require('moment')

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready for action!`);
    bot.user.setActivity()

    let status_liste = [
      `game1,
      `game2`
    ]
  
    setInterval(() => {
      let st = Math.floor(Math.random() * (status_liste.length - 1) + 1)
      bot.user.setPresence({ game: { name: status_liste[st], type:(2) }})
    }, 20000)
});
