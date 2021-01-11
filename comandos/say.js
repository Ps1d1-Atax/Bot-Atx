const Discord = require('discord.js')
exports.run = (client, message, args) => {
  let msg = args.join(" ")
  let embed = new Discord.MessageEmbed()
      .setColor('BLUE')
      .setDescription(msg)
  message.channel.send(embed)
}
