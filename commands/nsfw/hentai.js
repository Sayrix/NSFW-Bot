const Discord = require("discord.js"),
commandName = __filename.slice(__dirname.length + 1, -3),
disbut = require("discord-buttons");

exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(client.config.msg.nsfwWarn)

  let load = new Discord.MessageEmbed()
    .setDescription(client.config.msg.loading)
    .setTimestamp()

  message.channel.send(load).then(m => {

    client.superagent.get('https://nekobot.xyz/api/image').query({
      type: commandName
    }).end((err, response) => {

      let button = new disbut.MessageButton()
        .setStyle('url')
        .setURL(response.body.message)
        .setLabel(client.config.msg.imageNotLoading);

      let embed = new Discord.MessageEmbed()
        .setTimestamp()
        .setImage(response.body.message)
        .setFooter(client.config.footer)

      m.edit(embed, button);
    });
  });
};

exports.help = {
  name: commandName,
  description: `Send a ${commandName} image.`,
  usage: commandName,
  example: commandName
};

exports.conf = {
  aliases: [],
  cooldown: 5 // Integer = second.
};