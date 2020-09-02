const splitArgCommand = require('./../command_base_classes/command/split_arg_command');

module.exports = class help extends splitArgCommand{
	static name = 'help';
	static description = 'Gives you a list of all commands or information about a specific command';
	static execute(message, args) {
		return message.channel.send(
				Array.from(message.client.commands.keys())
				.join(',\n')
		);
	}
}