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
    if (message.content === '!linkmarine') {
        getChainlinkMeme(message);
    } else if (message.content.startsWith('!')) {
        getCoinPrice(message);
    } else if (message.content === '!chainlick') {
        message.channel.send(':chainlick:');
    }
});

/**
 * Get the coin price of the entered coin message.
 * @param message The message object parameter
 * @param coin The string the user has entered
 */
const getCoinPrice = (message) => {
    requestPrice(message.content, message);
};

/**
 * Retrieve a random meme from the img Array.
 */
const getChainlinkMeme = (message) => {
    message.channel.send({
        files: [imgSource[Math.floor(Math.random() * imgSource.length)]],
    });
};

process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error);
});
