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
	const map = new Map();
	commandFileNames.forEach(fileName => addCommandToMap(map, fileName));
	return map;
}
function addCommandToMap(map, fileName) {
	const command = require(`./commands/${fileName}`);
	checkCommandMatchesTemplate(command, fileName);
	map.set(command.name, command);
}
function checkCommandMatchesTemplate(command, fileName) {
	checkThatCommandHasVal(command.name, 'name');
	checkThatCommandHasVal(command.description, 'description');
	if (command.name + '.js' !== fileName) throw new Error(`${fileName}.name is not equal to file name`);
}
function checkThatCommandHasVal(val, valName) {
	if (typeof val === 'undefined') throw new Error(`${fileName}.${valName} does not exist`);
	if (val === null) throw new Error(`${fileName}.${valName} is null`);
}