module.exports = class splitArgCommand {
	static call(message, argString) {
		this.execute(message, argString.split(/ +/));
	}
	static execute() {
		throw new Error('execute() has not been overridden');
	}
}