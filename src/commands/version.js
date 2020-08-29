const { version } = require('./../config.json');

module.exports = {
	name: 'version',
	description: 'Gives you the current version of the bot',
	execute(message) {
		return message.channel.send(`Current version: v${version}.`);
	},
}