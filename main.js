const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
    console.log('Tô online carai, HOJE TEM MIX!!!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'brasso'){
        console.log(command);
        message.channel.send('ei ' + message.member.displayName + ' VOCÊ É UM BRASSAAAAAAAAAAAUM!');
    }
})

client.login('NzYzODYzOTAyNjU2MDA0MTE2.X395sg.tvALuQbaoHVsCwV7Iuh3JXXaSBU');