const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
    .setAuthor('Help :')
    .setDescription('Prefix : n!\nLa liste des commandes :')
    .addField('NSFW  :underage: :', '`4k`, `anal`, `ass`, `hentai`, `hkitsune`, `hneko`, `holo`, `kemonomimi`, `neko`, `pussy`')
    .addField('Autre :', '`help`, `stats`, `support`, `invite`')
    message.channel.send(help)
}