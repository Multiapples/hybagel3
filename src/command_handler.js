const { prefix } = require('./config.json');

module.exports = class CommandHandler {
	static handleCommandCall(message) {
		const commandName = isolateCommandName(message);
		if (isCallingInvalidCommand(message, commandName)) return;
		const commandArgString = isolateCommandArgString(message, commandName);
		callCommand(message, commandName, commandArgString);
	}
};

function isolateCommandName(message) {
	return message.content.split(' ')[0].slice(prefix.length);
}
function isolateCommandArgString(message, commandName) {
	return message.content.slice(prefix.length + commandName.length).trim();
}
function isCallingInvalidCommand(message, commandName) {
	return !message.client.commands.has(commandName);
}
function callCommand(message, commandName, commandArgString) {
	message.client.commands.get(commandName).call(message, commandArgString);
}