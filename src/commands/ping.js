const stringArgCommand = require('./../command_base_classes/command/string_arg_command.js');

module.exports = class ping extends stringArgCommand {
	static name = 'ping';
	static description = 'Pings me!';
	static execute(message) {
		return message.channel.send('poggers');
	}
}