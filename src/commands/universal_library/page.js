const StringArgCommand = require('./../../command_base_classes/command/string_arg_command.js');
const UniversalLibraryUtils = require('./../../utils/universal_library_utils.js');

module.exports = class Page extends StringArgCommand {
	static name = 'page';
	static description = 'Lookup the contents of a certain page.';
	static execute(message, argString) {
		message.channel.send(UniversalLibraryUtils.readPage(argString));
	}
}