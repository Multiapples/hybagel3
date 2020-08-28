const { prefix } = require('./config.json');

module.exports = {
	handleMessage(message) {
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return
		const nameAndArgs = this.stripNameAndArguments(message);
		console.log(nameAndArgs);
		if (message.client.commandModules.has(nameAndArgs.name))
			return this.executeCommand(message, nameAndArgs.name, nameAndArgs.args);
	},
	executeCommand(message, commandName, args) {
		return this.getCommand(message, commandName).execute(message, args);
	},
	getCommand(message, commandName) {
		return message.client.commandModules.get(commandName);
	},
	stripNameAndArguments(message) {
		const args = this.splitMessage(message);
		const name = args.shift().slice(prefix.length);
		return {
			name: name,
			args: args,
		};
	},
	splitMessage(message) {
		return message.content.trim().split(/ +/);
	},
};