module.exports = class command {
	static call() {
		throw new Error('call() has not been overridden');
	}
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