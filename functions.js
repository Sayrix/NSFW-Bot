const fs = require("fs");

module.exports = (bot) => {

    fs.readdir("./handlers/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("There are no events to load...");
        console.log(`Loading ${jsfiles.length} events...`);
        jsfiles.forEach((f, i) => {
            require(`./handlers/${f}`);
            console.log(`${i + 1}: ${f} loaded!`);
        });
    });

    fs.readdir("./commands/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");

        if (jsfiles.length <= 0) return console.log("There are no commands to load...");

        console.log(`Loading ${jsfiles.length} commands...`);
        jsfiles.forEach((f, i) => {
            let props = require(`./commands/${f}`);
            console.log(`${i + 1}: ${f} loaded!`);
            bot.commands.set(props.help.name, props);
            props.help.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            });
        });
    });

};