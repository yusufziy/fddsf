const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if(!message.member.hasPermission("ADMINSTOR")) return message.reply("Hata: Bunu yapmak için gerekli yetkiye sahip değilsin.")

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: true
  });
  message.channel.send(`Başarılı! artık herkes bu kanala yazı yazabilecek`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "kilitac",
  permLevel: 0
};

exports.help = {
  name: "kilitac",
  description: "Atalantis Development - Kilit Sistemi",
  usage: ""
};
