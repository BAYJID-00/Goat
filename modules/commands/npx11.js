const fs = require("fs");
module.exports.config = {
	name: "🙄",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙄",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🤥")==0 || event.body.indexOf("🤨")==0 || event.body.indexOf("🙄")==0 || event.body.indexOf("🤔")==0) {
		var msg = {
				body: "আপনি যেটা নিয়ে ভাবছেন, সেটা আপনি নিশ্চই করতে পারবেন। দেখার বিষয় তো এটাই আপনি কী ভাবছেন।🙄🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/Ariyan/ariyan8.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

        }