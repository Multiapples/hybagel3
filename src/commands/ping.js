module.exports = {
	name: 'ping',
	description: 'Pings me!',
	execute(message) {
		return message.channel.send('poggers');
	}
}