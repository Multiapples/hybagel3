const command = require('./../command.js');

module.exports = class stringArgCommand extends command {
	static call(message, argString) {
		this.execute(message, argString);
	}
}