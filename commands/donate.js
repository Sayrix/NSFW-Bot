const Discord = require('discord.js')
module.exports.run = (client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setColor(`#f368e0`)
    .setTimestamp()
    .setFooter(`NSFW Bot`, client.user.avatarURL)
    .setTitle(`<:Logo:592829213992812544> Donate`)
    .addField(`Paypal.me`, `**https://paypal.me/buryo**`)
    message.channel.send(Embed)
}

module.exports.help = {
    name: "donate",
    aliases: ["donate"]
}