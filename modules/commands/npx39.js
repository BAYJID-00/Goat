const fs = require("fs");
module.exports.config = {
	name: "npxs",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😱",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😷")==0 || event.body.indexOf("🤪")==0 || event.body.indexOf("😬")==0 || event.body.indexOf("🫢")==0) {
		var msg = {
				body: "রাতের বুকে চাঁদের আলো,আমি তো নেই ভাল। তুমি আমার কত আপন,তোমার জন্য কাঁদে এ মন।তাই জানতে চাই আছো কেমন তুমি?",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/irfan26.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💚", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }