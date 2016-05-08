/**
 * Created by rodrigo on 07/05/16.
 */
'use strict';

var TelegramBot = require('node-telegram-bot-api');

var token = process.env.TELEGRAM_TOKEN;
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

// Matches /echo [whatever]
bot.onText(/\/echo (.+)/, function (msg, match) {
	var fromId = msg.from.id;
	var resp = match[1];
	bot.sendMessage(fromId, resp);
});

// Any kind of message
bot.on('message', function (msg) {

	var chatId = msg.chat.id;
	// photo can be: a file path, a stream or a Telegram file_id
	var photo = 'pug.jpg';
	bot.sendPhoto(chatId, photo, {caption: 'Lovely kittens'});
});

