/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Suhao",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = [".কিছু মানুষ পূর্ণতা দেখিয়ে..!!🙂🥀\n-শূন্যতা উপহার দিয়ে যায়..!!😅💔",
             "•🌿জীবনে ঠকলে হয়তো বিশ্বাসটুকু নষ্ট হয়ে যায়,\nকিন্তু শেখা যায় অনেক কিছু।✅ ",
".💙🥀\n-༎༊প্রতিটা পুরুষ পাগল হওয়ার পিছনে\n একটা মায়াবী নারীর গল্প থাকে ۵ ༅༎😔💔",
"_প্রতিটা সম্পর্ক পূর্ণতা পাক..🙂\nএ শহর থেকে বিচ্ছেদ উঠে যাক। মানুষ গুলো সুখী হোক-! 🖤🌸.",
" ✿┼─🤗🦋🥀\n-প্রতিটা ব্যর্থতা থেকে জন্ম হয় সফলতা🌼\n-আর প্রতিটা আঘাত থেকে জন্ম হয় অভিজ্ঞতা😌🥀 ",
"-রাখতে পারলে তবেই কথা দিও😥\n\n-আর থাকতে পারলে তবেইএসো 💚🥀",
"_সারা বিশ্ব হেরে যায় শীত এর কাছে \n\nআর শীত হেরে যায় একজন ঈমানদারের কাছে..💚🥀",
" - হ্যাঁ, আমিও বদলে গেছি!😌\n\n- এখন যে আমাকে মনে রাখে! আমিও তাকেই মনে রাখি!🤗",
"পৃথিবীর শ্রেষ্ঠ জায়গায় মসজিদ!🤍.",
"  পৃথিবীর শ্রেষ্ঠ বই কোরআন !🤍",
"°~_নারীর চোখের ভাষা বুঝতে না পারলে,,, পুরুষ তুমি ব্যর্থ...🥀 .",
             "_একজনের প্রতি আসক্ত হয়ে দেখো...😇🌺\n\nভালোবাসা কত সুন্দর -!💚💛",
"- —!হটাৎ একদিন শুনতে পারবে লোকের ..!🍒\n\n —!🦋   দেওয়া    খবরে ✨..!🍒シ\n\n—!🦋 তোমায়    ছেড়ে    চলে    গেছি ✨..!🍒シ\n\n  —!🦋 অন্ধকার    কবরে...! 😅 🙂-!?",
"~এতো লম্বা রাত দিয়ে কি করবো,!🙄 \nযদি বউ--ই না থাকে..!🥺",
             "এই 'শহরে' 'রূপ' 'আর' ক্যারিয়ার থাকলে।🙂\n\n- সবার কাছে আপনি প্রিয়।😅🌸🥀", 
             "আমার মৃত্যুতে কারো আফসোস হবে না !!🙂\n\nকারণ আমি কারো প্রিয় মানুষ ছিলাম না !!💔🥀-︵😢😢\n\n💚🖤🌸",
             "°💚✨😽\n\n__!!>সৃষ্টিকতার কাছে কৃতজ্ঞ কারণ মা এখনো আমার পাশে আছে!'😇🦋",
             "০\n\হাসি হলো এমন একটা চাদর যা দিয়ে সকল কষ্টকে ঢেকে রাখা যায়! 😊🌿💜\n\n০",
"০\n\nজানি কখনোই পাবো না তোমাকে! 😊💖\n\n০",
             "ღ࿐– যখন বান্দার জ্বর হয়,😇\n🖤তখন গুনাহ গুলো ঝড়ে পড়তে থাকে☺️\n– হযরত মুহাম্মদ(সাঃ)●───༊༆",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽স্মার্ট নয় ইসলামিক ﷽🥰\n 🖤﷽ জীবন সঙ্গি খুঁজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽সুন্দর চেহারা নয় ﷽🥰\n 🖤﷽ সুন্দর মন খুজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛",
             "___ নারী তুমি নিজেকে এমন ভাবে তৈরি করো.!\n︵❝།།💚🌺ღ᭄︵❝།།💚🌺ღ᭄\n ------যাতে যেকোন পুরুষ তোমাকে পেয়ে..!🖤\n︵❝།།💚🌺ღ᭄︵❝།།💚🌺ღ᭄\n---বার বার রবের কাছে শুকরিয়া আদায় করে!🌺🌺︵❂✿༎༅⸙͎⸙͎\n︵❝།།💚🌺ღ᭄︵❝།།💚🌺ღ᭄\n#আলহামদুলিল্লাহ 🥰🌺🖤𝄞⋆⃝𝄞⋆⃝༅༎༅❍",
             "- ইসলাম অহংকার করতে শেখায় না!🌸\n\n- ইসলাম শুকরিয়া আদায় করতে শেখায়!🤲🕋🥀",
             "❥︎-----★ ভাগ্য !! কাকে !! বলে !! জানেন  !! 🖤🌻 \n🦋  পৃথিবীতে !! 4200 !! হাজার !! ধর্ম !! আছে  !!🥰\n❥︎-----★ তার !! মধ‍‍্যে !! আমি !! এবং !! আপনি !! মুসলিম  !! 💚🌻\n★-----🦋  আলহামদুলিল্লাহ্  🦋-----★",
             "┏━━━━ ﷽ ━━━━┓\n 🖤﷽স্মার্ট নয় ইসলামিক ﷽🥰\n 🖤﷽ জীবন সঙ্গি খুঁজুন ﷽🥰\n┗━━━━ ﷽ ━━━━┛",
             "ღ࿐– যখন বান্দার জ্বর হয়,😇\n🖤তখন গুনাহ গুলো ঝড়ে পড়তে থাকে☺️\n– হযরত মুহাম্মদ(সাঃ)●───༊༆",
             "~🍂🦋\n              ━𝐇𝐚𝐩𝐩𝐢𝐧𝐞𝐬𝐬 𝐈𝐬 𝐄𝐧𝐣𝐨𝐲𝐢𝐧𝐠 𝐓𝐡𝐞 𝐋𝐢𝐭𝐭𝐥𝐞\n                          ━𝐓𝐡𝐢𝐧𝐠𝐬 𝐈𝐧 𝐋𝐢𝐟𝐞..♡🌸\n           ━𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥𝐢𝐥𝐥𝐚𝐡 𝐅𝐨𝐫 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠...💗🥰",
             "•___💜🌈___•\n°___:))-তুমি আসক্ত হও-||-🖤🌸✨\n°___:))-তবে নেশায় নয় আল্লাহর ইবাদতে-||-🖤🌸✨\n•___🍒🖇️✨___•",
             "─❝হাসতে❜❜ হাসতে❜❜ একদিন❜❜😊😊\n ━❥❝সবাইকে❜❜ ─❝কাদিয়ে ❜❜বিদায়❜❜ নিবো❜❞.!!🙂💔🥀 ",
             "🦋🥀࿐\nლ_༎হাজারো༎স্বপ্নের༎শেষ༎স্থান༎••༊🙂🤲🥀\n♡_༎কবরস্থান༎_♡❤\n🦋🥀࿐",
             "•\n\nপ্রসঙ্গ যখন ধর্ম নিয়ে•🥰😊\nতখন আমাদের ইসলামই সেরা•❤️\n𝐀𝐥𝐡𝐚𝐦𝐝𝐮𝐥i𝐥𝐥𝐚🌸❤️",
             "❥︎-----★ ভাগ্য !! কাকে !! বলে !! জানেন  !! 🖤🌻 \n🦋  পৃথিবীতে !! 4200 !! হাজার !! ধর্ম !! আছে  !!🥰\n❥︎-----★ তার !! মধ‍‍্যে !! আমি !! এবং !! আপনি !! মুসলিম  !! 💚🌻\n★-----🦋  আলহামদুলিল্লাহ্  🦋-----★",

"weather সবার জন্য রোমান্টিক হয় না.!'💔",
             "পাক্বা প্রেমের বয়স চলতাছে ! 🥹🫣."];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
    
  "https://i.postimg.cc/NfCmyLrm/20230629-105816.jpg",
  "https://i.postimg.cc/DzvTtfBp/received-804518914333271.jpg",
"https://i.postimg.cc/W1rz24m2/IMG-20230603-175357.jpg",
"https://i.postimg.cc/k5KbhcYv/20230623-101848.jpg",
"https://i.postimg.cc/br8dMfSz/20230629-110059.png",
"https://i.postimg.cc/yxXDK3xw/images-26.jpg",
"https://i.postimg.cc/NfCmyLrm/20230629-105816.jpg",
"https://i.postimg.cc/NfCmyLrm/20230629-105816.jpg",
"https://i.postimg.cc/3NJ0NH8t/20230618-183629.jpg",
"https://i.postimg.cc/W1rz24m2/IMG-20230603-175357.jpg",
"https://i.postimg.cc/dVWyHfhr/images-1-21.jpg",
"https://i.postimg.cc/br8dMfSz/20230629-110059.png",
"https://i.postimg.cc/br8dMfSz/20230629-110059.png",
"https://i.postimg.cc/k5KbhcYv/20230623-101848.jpg",
"https://i.postimg.cc/DzvTtfBp/received-804518914333271.jpg",
"https://i.postimg.cc/NfCmyLrm/20230629-105816.jpg",
"https://i.postimg.cc/W1rz24m2/IMG-20230603-175357.jpg",
"https://i.postimg.cc/3NJ0NH8t/20230618-183629.jpg",

  "https://i.postimg.cc/br8dMfSz/20230629-110059.png",
  "https://i.postimg.cc/DzvTtfBp/received-804518914333271.jpg",
  "https://i.postimg.cc/DzvTtfBp/received-804518914333271.jpg",
  "https://i.postimg.cc/DzvTtfBp/received-804518914333271.jpg",
  "https://i.postimg.cc/DzvTtfBp/received-804518914333271.jpg",
  "https://i.postimg.cc/NfCmyLrm/20230629-105816.jpg",
  "https://i.postimg.cc/W1rz24m2/IMG-20230603-175357.jpg",
  "https://i.postimg.cc/3NJ0NH8t/20230618-183629.jpg",
  "https://i.postimg.cc/3NJ0NH8t/20230618-183629.jpg",
  "https://i.postimg.cc/W1rz24m2/IMG-20230603-175357.jpg",
  "https://i.postimg.cc/3NJ0NH8t/20230618-183629.jpg",
  "https://i.postimg.cc/k5KbhcYv/20230623-101848.jpg",
  "https://i.postimg.cc/br8dMfSz/20230629-110059.png",
  "https://i.postimg.cc/DzvTtfBp/received-804518914333271.jpg",
    "https://i.postimg.cc/DzvTtfBp/received-804518914333271.jpg",
    "https://i.postimg.cc/br8dMfSz/20230629-110059.png",
    "https://i.postimg.cc/NfCmyLrm/20230629-105816.jpg",
    "https://i.postimg.cc/DzvTtfBp/received-804518914333271.jpg"
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」 \n\𝄞❤️⋆⃝⑅⑅⃝❤️»̶̶͓͓̽̽̽»̶̶͓͓̽̽̽.•𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑♥🖤𝗗𝗝 𝗠𝗔𝗛𝗜𝗠-𝗫❤️⃪⃝⃘᭄⃕❤️ `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };