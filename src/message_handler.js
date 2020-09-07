const CommandHandler = require('./command_handler.js');
const { prefix } = require('./config.json');

module.exports = class MessageHandler {
	static handleMessage(message) {
		if (doesNotStartWithPrefix(message)) return;
		if (isAuthorBot(message)) return;
		CommandHandler.handleCommandCall(message);
	}
};

function doesNotStartWithPrefix(message) {
	return !message.content.startsWith(prefix);
}
function isAuthorBot(message) {
	return message.author.bot;
}