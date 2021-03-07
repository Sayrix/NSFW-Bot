const Discord = require("discord.js");
const config = require('../config.json')
module.exports.run = (client, message, args) => {
    var help = new Discord.MessageEmbed()
    .setAuthor('Help :')
    .setDescription(`Prefix : ${config.prefix}\nLa liste des commandes :`)
    .addField('NSFW  :underage: :', '`4k`, `anal`, `ass`, `hentai`, `hkitsune`, `hneko`, `holo`, `kemonomimi`, `neko`, `pussy`')
    .addField('Autre :', '`help`, `stats`')
    .setFooter(client.footer)
    message.channel.send(help)
}
