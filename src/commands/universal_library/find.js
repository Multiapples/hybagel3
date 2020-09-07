const StringArgCommand = require('./../../command_base_classes/command/string_arg_command.js');
const UniversalLibraryUtils = require('./../../utils/universal_library_utils.js');

module.exports = class Find extends StringArgCommand {
	static name = 'find';
	static description = 'Find which page a string is on.';
	static execute(message, argString) {
		message.channel.send(UniversalLibraryUtils.findPage(argString));
	}
}