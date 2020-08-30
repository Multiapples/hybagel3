module.exports = {
	name: 'help',
	description: 'Gives you a list of all commands or information about a specific command',
	doSplitArgs: true,
	execute(message, args) {
		return message.channel.send(
				Array.from(message.client.commands.keys())
				.join(',\n')
		);
	},
}