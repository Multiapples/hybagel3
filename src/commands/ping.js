module.exports = {
	name: 'ping',
	description: 'Pings me!',
	doSplitArgs: false,
	execute(message) {
		return message.channel.send('poggers');
	},
}