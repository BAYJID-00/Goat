  const fs = require("fs");
module.exports.config = {
	name: "salam",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🖤",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("সালাম")==0 || event.body.indexOf("salam")==0 || event.body.indexOf("🖤")==0 || event.body.indexOf("Salam")==0) {
		var msg = {
				body: "𝘼𝙨𝙨𝙖𝙡𝙖𝙢𝙪𝙡𝙖𝙞𝙠𝙪𝙢🦋💚",
				attachment: fs.createReadStream(__dirname + `/noprefix/salam.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }