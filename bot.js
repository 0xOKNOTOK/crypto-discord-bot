require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const requestPrice = require('./price-calc');
const imgSource = [
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/19.jpg',
    './img/11.jpg',
    './img/12.jpg',
    './img/13.jpg',
    './img/24.gif',
];

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.once('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', async (message) => {
    if (message.content === '!link') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!ripple') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!ethereum') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!dogecoin') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!tether') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!cardano') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!litecoin') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!polkadot') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!monero') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!stellar') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!vechain') {
        let coinID = message.content;
        requestPrice(coinID, message);
    }
});

bot.on('message', async (message) => {
    if (message.content === '!linkmarine') {
        message.channel.send({
            files: [imgSource[Math.floor(Math.random() * imgSource.length)]],
        });
    }
});

process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error);
});
