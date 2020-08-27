const Discord = require('discord.js');
const { token } = require('./config.json');
const MessageHandler = require('./message_handler.js');
const CommandLoader = require('./command_loader.js');

const client = new Discord.Client();
client.commandModules = CommandLoader.getCommandModules();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	MessageHandler.handleMessage(message);
});

client.login(token);