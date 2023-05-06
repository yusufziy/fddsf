const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
    
if(!message.member.hasPermission("ADMINSTOR")) return message.reply("Hata: Bunu yapmak için gerekli yetkiye sahip değilsin.")
  
let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`**#${channel.name}** isimli, kanal kopyalanıyor...`)
let position = channel.position;
setTimeout(() => {
channel.delete();
channel.clone({
name: channel.name,
reason: 'Silme İşlemi'
}).then(s => {
s.setPosition(position);
s.send('kanal başarıyla patlatıldı.\nhttps://imgur.com/LIyGeCR');
});
}, 280)

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['patlat'],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};