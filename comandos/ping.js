const Discord = require("discord.js");
const { MessageEmbed } = Discord
exports.run = (client, message, args) => {
    let embed = new MessageEmbed()
      .setTitle(`Resultado da consulta:`)
      .addField(`Latência 💢: `, Date.now() - message.createdTimestamp + 'ms.'
      )
      .addField(`Latência do Bot/API :robot:`, client.ws.ping + "ms."
      )
      .setColor("BLUE")
      .setThumbnail(message.author.displayAvatarURL({ format: "png" }));
    return message.channel.send(embed)
  }
