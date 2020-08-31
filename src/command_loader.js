module.exports = class CommandLoader {
	static getCommandModules() {
		const commandFileNames = getCommandFileNames();
		return getNameToModuleMap(commandFileNames);
	}
};

function getCommandFileNames() {
	const FileSystem = require('fs');
	return FileSystem.readdirSync('./commands').filter(file => file.endsWith('.js'));
}
function getNameToModuleMap(commandFileNames) {
	const commands = new Map();
	for (const fileName of commandFileNames)
		addCommandFileToMap(commands, fileName);
	return commands;
}
function addCommandFileToMap(map, fileName) {
	const module = require(`./commands/${fileName}`);
	checkThatCommandMatchesTemplate(module, fileName);
	map.set(module.name, module);
}
function checkThatCommandMatchesTemplate(module, fileName) {
	checkThatCommandHasVal(module.name, 'name', fileName);
	checkThatCommandHasVal(module.description, 'description', fileName);
	if (module.name + '.js' !== fileName) throw new Error(`command.name is not equal to file name in ${fileName}`);
}
function checkThatCommandHasVal(val, valName, fileName) {
	if (typeof val === 'undefined') throw new Error(`command.${valName} does not exist in ${fileName}`);
	if (val === null) throw new Error(`command.${valName} is null in ${fileName}`);
}