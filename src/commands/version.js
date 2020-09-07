const StringArgCommand = require('./../command_base_classes/command/string_arg_command.js');
const currentVersion = require('./../config.json').version;

module.exports = class version extends StringArgCommand {
	static name = 'Version';
	static description = 'Gives you the current version of the bot';
	static execute(message) {
		return message.channel.send(`Current version: v${currentVersion}.`);
	}
}