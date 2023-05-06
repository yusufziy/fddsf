const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  const embed = new Discord.MessageEmbed()
    .setColor(`BLUE`)
    .setTimestamp()
    .setFooter(`Atalantis Development - Genel Yardım Menüsü`)
    .setAuthor(
      "Atalantis Development Yardım Menüsüne Hoşgeldiniz",
      "https://cdn.discordapp.com/attachments/960274633058312263/996798416837410936/Atalantis_Development.png",
      "http://gg.gg/atalantisdevelopment"
    )
    .setThumbnail(
      `https://cdn.discordapp.com/attachments/960274633058312263/996798416837410936/Atalantis_Development.png`
    ).setDescription(`
- Bu bot mınecraft sunucularının discord sunucusu için yapılmıştır.
- [Tıklayarak "Atalantis Development" Youtube hesabına gidebilirsin.](http://gg.gg/atalantisdevelopment)

**Toplam Komutlar:** (7)
\`!mcsunucu\`, \`!mcskin\`, \`!avatar\`, \`!patlat\`, \`!davet\`, \`kilitac\`, \`kilitkapat\``);
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0,
};

exports.help = {
  name: "yardım",
  description: "Atalantis Development - Yardım Menüsü",
  usage: "",
};
