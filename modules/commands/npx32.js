const fs = require("fs");
module.exports.config = {
	name: "npxs11",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "ARIYAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs11",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🫥")==0 || event.body.indexOf("😶")==0 || event.body.indexOf("🤫")==0 || event.body.indexOf("🫠")==0) {
		var msg = {
				body: "- মানুষ ছ্যাকা খায় না 😔🥀 মিথ্যা ভালোবাসার কাছে হেরে যায় 🙂💔",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/irfan19.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }