const stringArgCommand = require('./../command_base_classes/command/string_arg_command');

module.exports = class ping extends stringArgCommand {
	static name = 'ping';
	static description = 'Pings me!';
	static execute(message, args) {
		return message.channel.send('poggers');
	}
}