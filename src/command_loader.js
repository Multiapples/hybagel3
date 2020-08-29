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
	if (module.name === null) throw `command name is null in ${fileName}`;
	if (module.description === null) throw `command description is null in ${fileName}`;
	if (module.name + '.js' !== fileName) throw `command name is not equal to file name in ${fileName}`;
}
