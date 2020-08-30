module.exports = {
	getCommandModules() {
		const commandFileNames = getCommandFileNames();
		return getNameToModuleMap(commandFileNames);
	}
};

function getCommandFileNames() {
	const FileSystem = require('fs');
	return FileSystem.readdirSync('./commands').filter(file => file.endsWith('.js'));
}
function getNameToModuleMap(commandFileNames) {
	const commandModules = new Map();
	for (const fileName of commandFileNames)
		addCommandFileToMap(commandModules, fileName);
	return commandModules;
}
function addCommandFileToMap(map, fileName) {
	const module = require(`./commands/${fileName}`);
	checkThatCommandMatchesTemplate(module, fileName);
	map.set(module.name, module);
}
function checkThatCommandMatchesTemplate(module, fileName) {
	checkThatCommandHasVal(module.name, 'name', fileName);
	checkThatCommandHasVal(module.description, 'description', fileName);
	checkThatCommandHasVal(module.doSplitArgs, 'doSplitArgs', fileName);
	if (module.name + '.js' !== fileName) throw `command.name is not equal to file name in ${fileName}`;
}
function checkThatCommandHasVal(val, valName, fileName) {
	if (typeof val === 'undefined') throw `command.${valName} does not exist in ${fileName}`;
	if (val === null) throw `command.${valName} is null in ${fileName}`;
}