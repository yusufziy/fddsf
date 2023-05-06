const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {
    let embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTimestamp()
    .setFooter(`Atalantis Development - Davet Menüsü`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/960274633058312263/996798416837410936/Atalantis_Development.png`)
    .setDescription(`**Atalantis Development - Davet Menüsü**

> Discord Sunucuna Beni Eklemek İstediğine Sevindim
> Aşşağıdaki Linklerden Beni Sunucuna Ekleyebilirsin

[YouTube adresimize gitmek İstiyorsanız Buraya Tıklayın](http://gg.gg/atalantisdevelopment)
\`\`\`http://gg.gg/atalantisdevelopment\`\`\`
[Eğer Botu 8 Permission Olarak Eklemek İstiyorsanız Buraya Tıklayın](https://discord.com/oauth2/authorize?client_id=833777800904572948&scope=bot&permissions=8)
\`\`\`https://discord.com/oauth2/authorize?client_id=996848293650894998&scope=bot&permissions=8\`\`\`
[Eğer Botu 0 Permission Olarak Eklemek İstiyorsanız Buraya Tıklayın](https://discord.com/oauth2/authorize?client_id=833777800904572948&scope=bot&permissions=0)
\`\`\`https://discord.com/oauth2/authorize?client_id=996848293650894998&scope=bot&permissions=0\`\`\`
`);
    message.channel.send(embed);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Atalantis Development - Davet Menüsü',
  usage: 'davet'
};
