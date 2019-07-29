const Discord = require('discord.js')
module.exports.run = (client, message, args) => {
    const Help = new Discord.RichEmbed()
    .setTitle(`<:Logo:592829213992812544> Help`)
    .setDescription(`Prefix : \`n/<command>\`\n\nNombre de commandes : **${client.commands.size}**\n\nListe des commandes :`)
    .addField(`► NSFW :underage:`, '*>* hentai\n*>* porn\n*>* porngif\n*>* nudes\n*>* pussy\n*>* overwatch\n*>* lol\n*>* pokemon\n*>* anal\n*>* cum\n*>* boobs\n*>* dildos', true)
    .addField(`► Bot :robot:`, '*>* help\n*>* support\n*>* donate\n*>* invite\n*>* stats', true)
    .addField(`► Owner :crown:`, '*>* exec', true)
    .setTimestamp()
    .setFooter(`NSFW Bot`, client.user.avatarURL)
    .setColor(`#f368e0`)
    message.channel.send(Help)
}

module.exports.help = {
    name: "help",
    aliases: ["help"]
}