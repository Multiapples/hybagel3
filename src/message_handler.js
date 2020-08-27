module.exports = {
	handleMessage(message) {
		if (message.author.bot) return;
		if (message.client.commandModules.has(message.content))
			return message.client.commandModules.get(message.content).execute(message);
	}
};