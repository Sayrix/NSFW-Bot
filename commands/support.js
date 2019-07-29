const Discord = require('discord.js')
module.exports.run = (client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setTitle(`<:Logo:592829213992812544> Support`)
    .addField(`Serveur Discord Support`, `**https://discord.gg/DuMcaMg**`)
    .setColor(`#f368e0`)
    .setTimestamp()
    .setFooter(`NSFW Bot`, client.user.avatarURL)
    message.channel.send(Embed)
}

module.exports.help = {
    name: "support",
    aliases: ["support"]
}