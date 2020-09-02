const command = require('./../command.js');

module.exports = class splitArgCommand extends command {
	static call(message, argString) {
		this.execute(message, argString.split(/ +/));
	}
}