module.exports = class command {
	static execute() {
		throw new Error('execute() has not been overridden');
	}
	/*
	static sendChannel() {
		// TODO
	}
	static sendDM() {
		// TODO
	}
	*/
}