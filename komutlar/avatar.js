const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let target = message.mentions.users.first() || message.author;
message.channel.send(new Discord.MessageEmbed()
.setAuthor(target.tag, target.displayAvatarURL({ dynamic: true }))
.setColor("BLUE")
.setFooter(`Atalantis Development - Profil`)
.setTitle('Profil Fotoğrafın:')
.setImage(target.displayAvatarURL({ dynamic: true, size: 512 })));
                     
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profil'],
  permLevel: 0
};
 
exports.help = {
  name: 'avatar'
};