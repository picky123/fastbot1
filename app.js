const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDQ5NjQ2ODQ3OTg0NjY0NjA2.DenwIg.HVRKbiyr2b02iMoJukf9zy7bpbE';

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
   client.user.setStatus("dnd");
  client.user.setGame(`in ${client.guilds.size} servers`);
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`:hugging: Bun venit în comunitatea **« Gaming - România » Conferință Publică**, ${member}!
:white_small_square: Ținând cont că ești o persoană nou venită pe serverul nostru, și dorim să te simti cat mai bine. 
Ne para rau ca nu avem cel mai bun bot sau cel mai bun staff dar o sa ne dezvoltam pe parcurs. 
Te rog uita-te pe **regulament** o sa te ajute destul de mult`);
});

client.login('NDQ5NjQ2ODQ3OTg0NjY0NjA2.DenwIg.HVRKbiyr2b02iMoJukf9zy7bpbE';
