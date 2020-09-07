const CommandCollection = require('./../command_base_classes/command/command_collection.js');
const Find = require('./universal_library/find.js');
const Page = require('./universal_library/page.js');

module.exports = class UniversalLibrary extends CommandCollection {
	static name = 'universal_library';
	static description = '';
	static subCommands = new Map()
		.set(Find.name, Find)
		.set(Page.name, Page);
}