const Discord = require("discord.js"),
  nsfwBot = require("./handler/Client.js"),
  client = new nsfwBot(),
  config = require('./config.json');

require("discord-buttons")(client);
require("./handler/Module.js")(client);
require("./handler/Event.js")(client);
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(config.token).catch(console.error); // This token will leads to the .env file. It's safe in there.