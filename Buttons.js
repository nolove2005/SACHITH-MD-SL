//Coded by H.M.J sachith chandra SL 2022
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// බොට් බටන් පමනක් වෙනස් කරන්න👍
// 👈 You Can change this your choice
global.list = ('List Menu ⚠️')
global.allmenu = ('All Menu ⚠️')
global.script = ('Script ⚠️')
global.owner = ('Owner ⚠️')
global.deploy = ('Deploy ⚠️')
global.project = ('Project ⚠️')
global.donate = ('Donate 🚀')
global.stop = ('Stop 🛑')
global.skip = ('Skip ⏩')
global.thanks = ('*ආයුබොවන් ♥️*')
// 👈 You Can change this your choice
global.nextimg = ('Next Image ➡️')
global.audio = ('🎶 Audio')
global.video = ('Video 📽')
global.yts = ('YTSEARCH 🌐')
global.play = ('Start 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
