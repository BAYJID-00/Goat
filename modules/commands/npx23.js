const fs = require("fs");
module.exports.config = {
	name: "npxs2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ARIYAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs2",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("☺️")==0 || event.body.indexOf("☺️")==0 || event.body.indexOf("😇")==0 || event.body.indexOf("🥲")==0) {
		var msg = {
				body: "-নাঈমা আপনার সাথে এক মূহুর্ত কথা না বললে মনে হয় কত কাল কথা বলা হয়নি..!! 💔🥀😘♦"
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/irfan11.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("☺", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }