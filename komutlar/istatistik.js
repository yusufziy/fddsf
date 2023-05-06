const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send(`Hata: Herangi bir sunucu adresi yazmalısınız.`)
    const API = await fetch(`http://mcapi.tc/?${args[0]}/json`)
    const Data = await API.json();
    if (Data.status === "offline") {
        message.channel.send("Hata: Girmiş olduğunuz IP adresine bağlı sunucu aktif değil.")
    } else {
        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
    .setAuthor(
      "Atalantis Development - Minecraft Sunucu",
      "https://cdn.discordapp.com/attachments/960274633058312263/996798416837410936/Atalantis_Development.png",
      "http://gg.gg/atalantisdevelopment")
            .setThumbnail(`https://cdn.discordapp.com/attachments/960274633058312263/996798416837410936/Atalantis_Development.png`)
            .addField(`Bağlantı Adresi:`, Data.hostname, true)
            .addField(`Geçikme:`, Data.ping, true)
            .setTimestamp()
            .addField(`Aktif Oyuncular:`, `${Data.players}/${Data.max_players}`, true)
            .setImage(`http://status.mclive.eu/AtalantisDevelopment/${args[0]}/25565/banner.png`)
            .setFooter("Atalantis Development - Sunucu Görüntüleme");
        message.channel.send(embed)
    }

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
exports.help = {
    name: 'mcsunucu',
};