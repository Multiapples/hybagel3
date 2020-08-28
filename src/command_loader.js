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
	map.set(module.name, module);
}