const { prefix } = require('./config.json');

module.exports = {
	handleMessage(message) {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return
		const nameAndArgString = stripNameAndArgumentString(message);
		if (message.client.commandModules.has(nameAndArgString.name))
			return executeCommand(message, nameAndArgString.name, nameAndArgString.argString);
	},
};

function stripNameAndArgumentString(message) {
	const name = message.content.split(' ')[0].slice(prefix.length);
	const argString = message.content.slice(name.length).trim();
	return {
		name: name,
		argString: argString,
	};
}
function executeCommand(message, name, argString) {
	const command = getCommand(message, name)
	if (command.doSplitArgs) {
		command.execute(message, splitArgumentString(argString));
	} else {
		command.execute(message, argString);
	}
}
function getCommand(message, commandName) {
	return message.client.commandModules.get(commandName);
}
function splitArgumentString(argString) {
	return argString.split(/ +/);
}