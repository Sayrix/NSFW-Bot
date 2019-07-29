const {bot} = require('../index');
const config = require("../config.json");
const moment = require('moment')

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready for action!`);
    bot.guilds.get('592746774171484172').channels.get('593012689249501187').send(`[${moment().format('DD/MM/YY - hh:mm:ss')}] Je viens de me connecter !`)
    bot.user.setActivity()

    let status_liste = [
      `n/help`,
      `n/help | ${bot.guilds.size} Serveurs`,
      `n/help | ${bot.users.size} Utilisateurs`,
      `n/help | ${bot.channels.size} Channels`,
      `n/help `
    ]
  
    setInterval(() => {
      let st = Math.floor(Math.random() * (status_liste.length - 1) + 1)
      bot.user.setPresence({ game: { name: status_liste[st], type:(2) }})
    }, 20000)
});