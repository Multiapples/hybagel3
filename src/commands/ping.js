module.exports = {
	name: 'ping',
	description: 'Pings me!',
	doSplitArgs: false,
	execute(message, args) {
		return message.channel.send('poggers');
	},
}