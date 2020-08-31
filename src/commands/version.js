const stringArgCommand = require('./../command_base_classes/string_arg_command.js');
const currentVersion = require('./../config.json').version;

module.exports = class version extends stringArgCommand {
	static name = 'version';
	static description = 'Gives you the current version of the bot';
	static execute(message, args) {
		return message.channel.send(`Current version: v${currentVersion}.`);
	}
}