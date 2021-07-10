const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Bot online !`);
    console.log(`${client.channels.size}`);

});

client.login("your token);
