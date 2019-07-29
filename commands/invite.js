const Discord = require('discord.js')
module.exports.run = (client, message, args) => {
    const Embed = new Discord.RichEmbed()
    .setTitle(`<:Logo:592829213992812544> Ìnvite`)
    .setColor(`#f368e0`)
    .setTimestamp()
    .setFooter(`NSFW Bot`, client.user.avatarURL)
    .addField(`Pour ajouter le bot :arrow_down::arrow_down::arrow_down:`, `https://discordapp.com/api/oauth2/authorize?client_id=592753795574923275&permissions=8&scope=bot`)
    message.channel.send(Embed)
}

module.exports.help = {
    name: "invite",
    aliases: ["invite"]
}