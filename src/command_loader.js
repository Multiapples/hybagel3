module.exports = class CommandLoader {
	static getCommandModules() {
		const commandFileNames = getCommandFileNames();
		return getNameToCommandMap(commandFileNames);
	}
};

function getCommandFileNames() {
	const FileSystem = require('fs');
	return FileSystem.readdirSync('./commands').filter(file => file.endsWith('.js'));
}
function getNameToCommandMap(commandFileNames) {
	const commands = new Map();
	commandFileNames.forEach(fileName => addCommandToMap(commands, fileName));
	return commands;
}
function addCommandToMap(map, fileName) {
	const module = require(`./commands/${fileName}`);
	checkCommandMatchesTemplate(module, fileName);
	map.set(module.name, module);
}
function checkCommandMatchesTemplate(module, fileName) {
	checkThatCommandHasVal(module.name, 'name');
	checkThatCommandHasVal(module.description, 'description');
	if (module.name + '.js' !== fileName) throw new Error('command.name is not equal to file name');
}
function checkThatCommandHasVal(val, valName) {
	if (typeof val === 'undefined') throw new Error(`command.${valName} does not exist`);
	if (val === null) throw new Error(`command.${valName} is null`);
}