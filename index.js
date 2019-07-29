const discord = require("discord.js");
const token = require("./token.json").token;
const bot = new discord.Client({
  disableEveryone: true
});
require("./functions")(bot);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;

bot.login(token);

bot.on('guildCreate', guild => {
  const embedJoin = new discord.RichEmbed()
      .setDescription(`📌 Merci d'avoir ajouté NSFW Bot sur ${guild.name}. Grâce à toi Uty est sur ${bot.guilds.size} serveurs, Merci ❤️`)
      .addField("📋 __Nom du serveur__", guild.name, true)
      .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
      .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
      .addField("👤 __Propriétaire__ :", `${guild.owner}`, true)
      .addField("🌍 __Région du serveur__ :", guild.region, true)
      .addField("📝 __ID du serveur__ :", guild.id, true)
      .setThumbnail(guild.avatarURL)
      .setFooter(`NSFW Bot`, bot.user.avatarURL)
      .setTimestamp()
      .setColor(`#f368e0`)
  bot.guilds.get('592746774171484172').channels.get('592843616867713026').send(embedJoin)
});