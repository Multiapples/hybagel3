const commandCollection = require('./../command_base_classes/command/command_collection.js');
const versionCommand = require('./version');
const helpCommand = require('./help');

module.exports = class help extends commandCollection {
	static name = 'testcol';
	static description = 'Gives you a list of all commands or information about a specific command';
	static subCommands = new Map()
		.set(versionCommand.name, versionCommand)
		.set(helpCommand.name, helpCommand);
}