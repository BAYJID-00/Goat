  const fs = require("fs");
module.exports.config = {
	name: "😒",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😒",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😐")==0 || event.body.indexOf("😒")==0 || event.body.indexOf("🫣")==0 || event.body.indexOf("😳")==0) {
		var msg = {
				body: "সফল মানুষ হতে চাইলে, সর্বপ্রথম অসফল হতে ভয় পেওনা।🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/ariyan10.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }