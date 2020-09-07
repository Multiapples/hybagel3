const Command = require('./../command.js');

module.exports = class SplitArgCommand extends Command {
	static call(message, argString) {
		this.execute(message, argString.split(/ +/));
	}
}