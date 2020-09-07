const Command = require('./../command.js');

module.exports = class StringArgCommand extends Command {
	static call(message, argString) {
		this.execute(message, argString);
	}
}