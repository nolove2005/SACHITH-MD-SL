// 👈 අදාල දෙවල් විතරක් වෙනස් කරන්න👍 
// ⚠️ ❍🇸 🇦 🇨 🇭 🇮 🇹 🇭  ＭＤ ＷＡ ＢＯＴ ＳＬ❍⚠️  
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}


//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['⚠️'] // 👈 ඔයා කැමති ඉමොජි එකක් දාන්න👍
global.symb = '█' // 👈  මෙ තියෙන එවගෙන් එකක් පමනක්👍👉 ▁ ▂ █ ░ ▘ □ ▣
global.symb2 = '▎ █' // 👈 මෙ තියෙන එවගෙන් එකක් පමනක්👍👉 ▬▓▌▎■
global.symb3 = '▬' // 👈 මෙ තියෙන එවගෙන් එකක් පමනක්👍👉 ▅ ▂ ▁ ▊
global.emoji02 = ['♥️'] //👈 කැමති ඉමොජි එකක් දාන්න👍
global.notice = ` *Hi 🥰 I m*
*🇸 🇦 🇨 🇭 🇮 🇹 🇭*
*I am 17 years old developer...*
*From Sri Lanka 🇱🇰*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/zenoixnoize*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+94711502119'] //👈  Enter Your number
global.premium =  ['+94711502119'] //👈  Enter Your number
global.ownernomer = '+94711502119' //👈  Enter Your number
global.ownername = 'ZENOI' //👈 Enter Your name
global.botname = 'ＳＡＣＨＩＴＨ ＭＤ ＢＯＴ' //👈 Enter Your Bot name
global.footer = '✵𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 𝙎𝘼𝘾𝙃𝙄𝙏𝙃' //👈 Enter Your Name
global.ig = 'https://github.com/nolove2005/SACHITH-MD-SL' // 👈 You Can change this your choice
global.region = 'India, South India, Kerala' // 👈 You Can change this your choice
global.sc = 'https://github.com/nolove2005/SACHITH-MD-SL'
global.fbt = 'Follw Us ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://github.com/nolove2005/SACHITH-MD-SL/'// 👈 Enter your Social media link to follow now button
global.welcome = '*ගෘපට ආදරයෙන් පිලිගන්නො' // 👈 You Can change this your choice
global.bye = '*Bye bye Mother fucker 🤣*' // 👈 You Can change this your choice
global.packname = 'ＳＡＣＨＩＴＨ ＭＤ ＢＯＴ'  // 👈 You Can change this your choice 
global.author = 'SACHITH MD SL WA' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.imgur.com/NGaJQta.jpeg' 
global.spoty = 'https://i.imgur.com/NGaJQta.jpeg'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'ඉවරයි හොදෙ 🚫', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
/// මෙවා වෙනස් කරන්න එපා...🚫 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})


///⚠️මෙක ආදාල නැ...ඔයාලට..⚠️👇
// Update Logs
// New Menu Ui
/*
▬
▎ Hi  Ｚ Ξ ＮＯＩ 👋 
▎ ＳＡＣＨＩＴＨ ＭＤ ＷＡ ＢＯＴ
▎ █ 𝗦𝗽𝗲𝗲𝗱 : 0.00119 miliseconds
▎ █ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : 9 hours, 58 minutes, 23 seconds
▎ █ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ＳＡＣＨＩＴＨ ＢＯＴ 
▎ █ 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : SACHITH
▎ █ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : +94767233346
▎ █ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : SACHITH
▎ █ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : linux
▎ █ 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : 11
   ⚠️ＢＯＴ ＣＯＭＡＮＤＯ⚠️
   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 
   *▓  AllMenu* 
   *▓  DownloadMenu*
   *▓  Searchmenu*
   *▓  mainimenu*
   *▓  Convertmenu*
   *▓  Funmenu*
   *▓  Databasemenu*
   *▓  Gamemenu*
   
▎ ️ＳＡＣＨＩＴＨ ＢＯＴ  Created by SACHITH
▎ 🇸 🇦 🇨 🇭 🇮 🇹 🇭  ＭＤ ＷＡ ＢＯＴ ＳＬ
▎ ＳＡＣＨＩＴＨ ＳＬ ＭＯＤＺ             
⭕►▁▁▁▁▁▁▁▁▁▁▁▁▁▁
   ▎ ＳＡＣＨＩＴＨ ＢＯＴ
   ▁▁▁▁▁▁▁▁▁▁▁▁▁▁
 ▁▁▁▁▁▁▁▁▁▁▁▁▁▁
▎ 
   █▄▄ █▀█ ▀█▀
   █▄█ █▄█ ░█░
⭕▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
*/
// Fix Audio And Video Bug
