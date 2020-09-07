const SplitArgCommand = require('./../command_base_classes/command/split_arg_command.js');

module.exports = class Help extends SplitArgCommand {
	static name = 'Help';
	static description = 'Gives you a list of all commands or information about a specific command';
	static execute(message) {
		return message.channel.send(
				Array.from(message.client.commands.keys())
				.join(',\n')
		);
	}
}