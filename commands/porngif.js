const Discord = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    if (!message.channel.nsfw) return message.channel.send('<:None:592829210628718613> Vous devez faire cette commande dans un channel NSFW !') 

    let reddit = [
        "porn_gifs",
        "NSFW_GIF",
        "nsfw_gifs",
        "60fpsporn",
        "the_best_nsfw_gifs"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    const loading = new Discord.RichEmbed()
      .setDescription('<a:Loading:592829210054098944> Chargement')
      .setColor(`#36393f`)
    randomPuppy(subreddit).then(async url => {
        const two = new Discord.RichEmbed()
        .setTitle('🔞Porngif :')
        .setImage(url) 
        .setColor(`#f368e0`)
        .setTimestamp()
        .setFooter(`NSFW Bot`, bot.user.avatarURL)

        message.channel.send(loading).then(async msg => {
            setTimeout(() => {
                msg.edit(two);
            }, 600)
    })
    }).catch(err => console.error(err));
};

module.exports.help = {
    name: 'porngif',
    aliases: ['porngif']
}