const { prefix } = require('./config.json');

module.exports = {
	handleMessage(message) {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return
		const nameAndArgString = stripNameAndArgumentString(message);
		if (message.client.commandModules.has(nameAndArgString.name))
			return executeCommand(message, nameAndArgString);
	},
};

function executeCommand(message, nameAndArgString) {
	const command = getCommand(message, nameAndArgString.name)
	if (command.doSplitArgs) {
		command.execute(message, splitArgumentString(nameAndArgString.argString));
	} else {
		command.execute(message, nameAndArgString.argString);
	}
}
function getCommand(message, commandName) {
	return message.client.commandModules.get(commandName);
}
function stripNameAndArgumentString(message) {
	const name = message.content.split(' ')[0].slice(prefix.length);
	const argString = message.content.slice(name.length).trim();
	return {
		name: name,
		argString: argString,
	};
}
function splitArgumentString(argString) {
	return argString.split(/ +/);
}