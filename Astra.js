const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./Astraconfig");

bot.on('ready', () => {
  bot.user.setGame("'help | " + bot.guilds.size + ' Servers');
  console.log("AstraBot Online");
});

bot.on('reconnecting', () => {
  console.log('AstraBot reconnecting');
});

bot.on('guildCreate', guild => {
  console.log('Joined ' + guild.name + '|' + guild.id + ' and is owned by ' + guild.owner.user.username + '|' + guild.owner.id);
  bot.user.setGame("'help | " + bot.guilds.size + ' Servers');
});

bot.on('guildDelete', guild => {
  console.log('Removed from ' + guild.name + '|' + guild.id + ' and it was owned by ' + guild.owner.user.username + '|' + guild.owner.id);
  bot.user.setGame("'help | " + bot.guilds.size + ' Servers');
})

bot.on('message', message => {
  if(!message.content.includes(config.prefix)) return;
  let cont = message.content.slice(config.prefix);
});

bot.login(config.token);
