module.exports = {
	getCommandModules() {
		const commandFileNames = this.getCommandFileNames();
		const commandModules = new Map();
		for (const fileName of commandFileNames) {
			const module = require(`./commands/${fileName}`);
			commandModules.set(module.name, module);
		}
		return commandModules
	},
	getCommandFileNames() {
		const FileSystem = require('fs');
		return FileSystem.readdirSync('./commands').filter(file => file.endsWith('.js'));
	}
};