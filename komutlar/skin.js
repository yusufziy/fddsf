const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('Hata: Bunu yapabilmek için bir oyuncu adı girmelisiniz.');
 if (mesaj == member) {
    message.reply('Hata: Kullanıcı adi değil. Oyuncu adı belirtmelisin.')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setTitle('Oyuncunun Karakteri: ' + mesaj)
   .setImage(body)
   .setTimestamp()
   .setFooter(`Atalantis Development - Skin Görüntüleme`)
   .setColor(`BLUE`)
 message.channel.send(mcbody);
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['skin'],
 permLevel: 0
};

exports.help = {
 name: 'mcskin',
  description: "Atalantis Development - Skin Görüntüleme",
 usage: ''
};