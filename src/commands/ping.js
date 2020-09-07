const StringArgCommand = require('./../command_base_classes/command/string_arg_command.js');

module.exports = class Ping extends StringArgCommand {
	static name = 'Ping';
	static description = 'Pings me!';
	static execute(message) {
		return message.channel.send('poggers');
	}
}