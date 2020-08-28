const { prefix } = require('./config.json');

module.exports = {
	handleMessage(message) {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return
		const nameAndArgs = stripNameAndArguments(message);
		if (message.client.commandModules.has(nameAndArgs.name))
			return executeCommand(message, nameAndArgs.name, nameAndArgs.args);
	},
};

function executeCommand(message, commandName, args) {
	return getCommand(message, commandName).execute(message, args);
}
function getCommand(message, commandName) {
	return message.client.commandModules.get(commandName);
}
function stripNameAndArguments(message) {
	const args = splitMessage(message);
	const name = args.shift().slice(prefix.length);
	return {
		name: name,
		args: args,
	};
}
function splitMessage(message) {
	return message.content.trim().split(/ +/);
}