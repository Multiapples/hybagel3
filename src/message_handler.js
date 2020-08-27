const { prefix } = require('./config.json');

module.exports = {
	handleMessage(message) {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return
		const inputtedCommandName = message.content.substr(prefix.length);
		if (message.client.commandModules.has(inputtedCommandName))
			return message.client.commandModules.get(inputtedCommandName).execute(message);
	}
};