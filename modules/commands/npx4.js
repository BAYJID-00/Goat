const fs = require("fs");
module.exports.config = {
	name: "😡",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🤬",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😡")==0 || event.body.indexOf("😠")==0 || event.body.indexOf("🤬")==0 || event.body.indexOf("😤")==0) {
		var msg = {
				body: "Jinuk আপনার সাথে এক মূহুর্ত কথা না বললে মনে হয় কত কাল কথা বলা হয়নি আর আপনি কতোদিন হলো কথা বলেন না আমার সাথে..!! 💔🥀😘",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/ariyan4.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫠", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }