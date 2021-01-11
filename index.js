onst Discord = require('discord.js');
const Enmap = require('enmap');
const config = require('./config')
const fs = require('fs');

const client = new Discord.Client();
const prefix = 'x!';

//===========Inicio do Handler===========

fs.readdir('./events/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		let eventName = file.split('.')[0];
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Enmap();

fs.readdir('./commands/', (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split('.')[0];
		console.log(`Comando carregado: ${commandName}`);
		client.commands.set(commandName, props);
	});
});
//===========Fim do Handler===========

client.on('ready', () => {
  let palavras = [
    `e atacando!`,
    `- Meu prefixo é: x!`,
    `e defendendo!`,
    `- sabia que pode me add pelo zuraaa só pesquisando Atax?`,
    `- sabia que quase fui um bot de rpg feito por open sorce?`,
    `- meu nome seria Rpg guilde, sem preconceito, mas Atax é mais maneiro 😎 `,
    `- meu dono ja pensou em me vender, que bom que não fez isso 😥`,
    `- assistindo alguem refletindo sobre a vida`,
    `- lutando contra raids!`,
    `- vote no Atax pelo zuraaa!`
  ]
  inc = 0
  setInterval(() => client.user.setActivity(`${palavras[inc++ % palavras.length]}`, {type: `PLAYING`}), 1000 * 10)
})

client.login(config.token);
