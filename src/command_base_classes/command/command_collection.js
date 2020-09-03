const command = require('./../command.js');

module.exports = class commandCollection extends command {
	static subCommands;
	static call(message, argString) {
		if (argString === '') {
			this.execute(message, argString);
			return;
		}
		const subCommandName = argString.split(' ')[0];
		if (isValidCommand(this.subCommands, subCommandName)) {
			callSubCommand(message, argString, this.subCommands, subCommandName);
			return;
		}
		handleInvalidCommandCall(message, argString);
	}
	static execute() {
		console.log("collection command called");
	}
}

function isValidCommand(subCommands, subCommandName) {
	return subCommands.has(subCommandName);
}
function callSubCommand(message, argString, subCommands, subCommandName) {
	subCommands.get(subCommandName).call(message, getNewArgString(argString, subCommandName));
}
function getNewArgString(argString, subCommandName) {
	return argString.slice(subCommandName.length).trim();
}
function handleInvalidCommandCall() {
	console.log("invalid command called");
}