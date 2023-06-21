

const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//Owner Setting
global.owner = ['62895412747634'] //Owner Number
global.ownernomer = "62895412747634" //Owner Number 02
global.ownername = "Satrio Aji" //Owner NMe
global.ytname = "https://www.youtube.com/@strioaji_" //YouTube Owner
global.socialm = "GitHub: https://github.com/keepdahustle" //Github Owner
global.location = "🇮🇩 Indonesia" //Country

//Bot Setting
global.botname = "Emilia Bot"
global.ownernumber = '62895412747634'
global.ownername = 'Satrio Aji'
global.ownerNumber = ["62895412747634@s.whatsapp.net"]
global.ownerweb = "https://lynkfire.com/satrioaji"
global.websitex = "https://instagram.com/keepdahustle"
global.wagc = " - "
global.themeemoji = '🚩'
global.wm = "Emilia On Top"
global.botscript = ' - ' //script link
global.packname = "Sticker By"
global.author = "Emilia Bot"
global.creator = "62895412747634@s.whatsapp.net"
global.prefa = ['!','.','#','&','`']
global.hituet = 0
global.apikeyai = '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' //Apikey OpenAi Kalian

//media target
global.thum = fs.readFileSync("./media/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./media/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./media/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./media/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'Cuma bisa dipake Admin',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'Cuma bisa dipake Satrio Aji!',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the Satrio Aji to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})