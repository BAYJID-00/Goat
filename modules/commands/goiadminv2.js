module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100004288534993",
     "100000033133005") {
    var aid = ["100004288534993","100000033133005","100000033133005","100004288534993","100004288534993","100000033133005","100004288534993"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝗠𝗔𝗛𝗜𝗠 সিংগেল পোলা তাকে একটা গফ দেও", "বস 𝗠𝗔𝗛𝗜𝗠 মেনশন দিলে তোমার নাকের মধ্যে একটা ঘুশি দিমু এ বাল  আমি 𝗠𝗔𝗛𝗜𝗠 বট বলতেছি মেয়ে হলে জামাই ডাক 😍 মেয়ে তোমাকে বলছি I Love You - !😍🥵", "𝗠𝗔𝗛𝗜𝗠 আর একবার মেনশন দিলে খবর আছে তোমার, তোমাকে কিন্তু ঘুষি মারমু 𝗠𝗔𝗛𝗜𝗠 মেনশন দিবা না😠","বস 𝗠𝗔𝗛𝗜𝗠  এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না 🥰😍😏"," বস  𝗠𝗔𝗛𝗜𝗠 এখন অনেক বিজি তাকে মেনশন দিবা না😡😡😡"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}