const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if(!message.member.hasPermission("ADMINSTOR")) return message.reply("Hata: Bunu yapmak için gerekli yetkiye sahip değilsin.")

  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: true
  });
  message.channel.send(`Artık kimse bu kanala mesaj gönderemeyecek.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "kilitkapat",
  permLevel: 0
};

exports.help = {
  name: "kilitkapat",
  description: "Atalantis Development - Kilit Sistemi",
  usage: ""
};
