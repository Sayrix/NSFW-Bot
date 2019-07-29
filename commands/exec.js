var { exec } = require('child_process');
const Discord = require('discord.js');
exports.run = (client, message, args) => {
        if (!["388973110549807104"].includes(message.author.id)) return;

    exec(`${args.join(' ')}`, (error, stdout) => {
        var response = (error || stdout);
        if (!error) message.channel.send(`\\✅ | L'execution s'est terminée sans problêmes :`);
        else message.channel.send(`\\❌ | Une erreur est survenue lors de l'exécution :`);
        message.channel.send(`${response}`, {
            code: "js",
            split: "\n"
        }).catch(e => console.log(e));
    });
}

module.exports.help = {
    name: "exec",
    aliases: ["exec"]
}