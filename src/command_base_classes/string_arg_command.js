module.exports = class stringArgCommand {
	static call(message, argString) {
		this.execute(message, argString);
	}
	static execute() {
		throw new Error('execute() has not been overridden');
	}
}