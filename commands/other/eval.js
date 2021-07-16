const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!client.config.owners.includes(message.author.id)) return;

  try {
    let code = args.join(" ");
    let evaled = await eval(code);
    if (typeof evaled !== "string") {
      evaled = require("util").inspect(evaled);
    }
    message.channel.send(`\\✅ | L'eval s'est terminée sans problêmes :`).then(() => {
      message.channel.send(evaled, {
        code: "js",
        split: "\n"
      });
    })
  } catch (err) {
    message.channel.send(`\\❌ | Une erreur est survenue lors de l'exécution :\`\`\`js\n${err.stack}\n\`\`\``);
  }
};

exports.help = {
  name: "eval",
  description: "Eval an command",
  usage: "eval <eval>",
  example: "eval message.channel.send('a')"
};

exports.conf = {
  aliases: [],
  cooldown: 5 // Integer = second.
};