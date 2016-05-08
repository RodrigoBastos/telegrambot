/**
 * Created by rodrigo on 07/05/16.
 */
'use strict';

var TelegramBot 			= require('node-telegram-bot-api');
var AIMLInterpreter 	=	require('aimlinterpreter');

//BOT CONFIG
var token = process.env.TELEGRAM_TOKEN;
var edbot = new TelegramBot(token, {polling: true});

//LOADING AIML
var aimlInterpreter = new AIMLInterpreter({name:'Edbot', age:'20'});
aimlInterpreter.loadAIMLFilesIntoArray(['./test.aiml']);


// Any kind of message
edbot.on('message', function (msg) {
	var chatId = msg.chat.id;

	aimlInterpreter.findAnswerInLoadedAIMLFiles(msg.text, callback);

	function callback (answer) {
		console.log('MENSAGEM:', msg);
		edbot.sendMessage(chatId, answer, []);
	}

});
