const stringArgCommand = require('./../command_base_classes/string_arg_command.js');

module.exports = class ping extends stringArgCommand {
	static name = 'ping';
	static description = 'Pings me!';
	static execute(message, args) {
		return message.channel.send('poggers');
	}
}