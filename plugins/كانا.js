import { sticker } from '../lib/sticker.js'
let handler = m => m
handler.all = async function (m, {conn} , quoted) {
let chat = global.db.data.chats[m.chat]
  const wordd = [
'ساسكي',
'اوبيتو',
'كوروكو',
'ناروتو',
'موراساكيبارا',
'توغا',
'مادارا',
'دوفلامينغو',
'لوفي',
'زورو',
'كاكاشي',
'يوزوريها',
'شوري',
'سابر',
'ايتشيغو',
'ويس',
'اليكيورا',
'زاراكي',
'سوما',
'ويس',
'نامي',
'هاشيراما',
'سانجي',
'ديدارا',
'هيناتا',
'اراتا',
'ميدوريا',
'ليفاي',
'ايرين',
'ايزن',
'ناتسو',
'لوسي',
'ياغامي',
'هيسوكا',
'كامينا',
'شوتو',
'سايتاما',
'يوهان',
'هانكوك',
'غارا',
'اكاينو',
'اوروتشيمارو',
'كانا','كونان','ادوارد','ساكورا','شانكس','روك','جيرين','غوكو','بروك','اسكانور','ايتاتشي',
'تانجيرو','استا','ايروين','ايتادوري','هانجي','كورو','ميناتو','ميليوداس','كورابيكا','دابي','روجر','ميهوك','ياتو','شارلوت','فيجيتا','ريوك','كورابيكا','بان','هاناكو','مايفيس','انوس','جيمبي','أراماكي','كيريشما','كاغويا','هيكيمارو','لاكسوس','ايلينا',
'زيك','ريديوس','ناوفومي','اوراهارا','تسونادي','اول مايت','نيترو','جينتوكي','ثورفين','بيك','كاكاروت','ايما','ريكارد','الين والكر'



		]
		const side1 = Math.floor(Math.random() * 2) + 1
		const kannaa = [	'هلا','سم امرني','عايز ايه يعرص','لبيه عيوني','اخلص وش تبي','تفضل','عيون كانا' 	   ]
		   const kana1 = kannaa[Math.floor(Math.random() * (kannaa.length))]
		   const agre = ['انا لا اتفق','يب يب اتفقق' ]
		   const agre1 = agre[Math.floor(Math.random() * (agre.length))]
		   const lovekana = ['وانا احبك يا عمري' ,'وفر حبك لنفسك' ,'انقلع يمتحرش' ,'حبيبي اخوي' ,'اقلب وجهك' ,'مححح' ,'حبتك العافيه' ,'شاطر' ,'اطلق من يحبني' ,'توكل يخوي','عزيز وغالي','اموت فيك','ليش']
		   const lovekana1 = lovekana[Math.floor(Math.random() * (lovekana.length))]
		   const brb = [ 'لا تطول غيبتك'  ,'فين رايح وش بنسوي بدونك','لا ترجع','تيت','راح العسل','خذ وقتك يحب' ]
		   const brb1 = brb[Math.floor(Math.random() * (brb.length))]
		   const hatee = ['وانا اكرهك','راقب رقمك','ليش ايش سويتلك','احسن','احبك']
		   const hate = hatee[Math.floor(Math.random() * (hatee.length))]
		const str1 = Math.floor(Math.random() * 3)


if (/^كانا$/i.test(m.text) && chat.audios && !chat.isBanned) {
  if (side1 == 1) { 	

  await  this.sendPresenceUpdate('composing', m.chat)   
			await m.reply(`${kana1}`) 
	} 
	else if (side1 == 2) { 
let vn = `./src/nani.mp3`
await this.sendPresenceUpdate('recording', m.chat)   
await this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
  }}    
if (/^كانا احبك$/i.test(m.text) && chat.audios && !chat.isBanned) {
   if (side1 == 1) { 	

  await  this.sendPresenceUpdate('composing', m.chat)   
			await m.reply(`${lovekana1}`) 
	} 
	else if (side1 == 2) { 
let vn = `./src/oni${str1}.mp3`
await this.sendPresenceUpdate('recording', m.chat)   
await this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
  }
}

  if (/^برب$/i.test(m.text) && chat.audios && !chat.isBanned || /^باي$/i.test(m.text) && chat.audios && !chat.isBanned) {
      await  this.sendPresenceUpdate('composing', m.chat)   

    			await m.reply(`${brb1}`) 

  }
  if (/^تع$/i.test(m.text) && chat.audios && !chat.isBanned) {
     			const wlak1 = await fs.readFileSync('./src/game/t3dad.txt').toString().split('\n')
					const messid1 = wlak1[Math.floor(Math.random() * wlak1.length)]
      
             this.sendMessage(m.chat, {text:messid1} , {quoted:m})
  }
    if (/^تت$/i.test(m.text) && chat.audios && !chat.isBanned) {
     			const trtreb = await fs.readFileSync('./src/game/trteb.txt').toString().split('\n')
					const trten3 = trtreb[Math.floor(Math.random() * trtreb.length)]
      
             this.sendMessage(m.chat, {text:`*${trten3}*`} , {quoted:m})
  }
if (/سلام عليكم/i.test(m.text) && !chat.isBanned) {
  m.reply('عليكم السلام ورحمه الله وبركاته')
}
  if (/^كت$/i.test(m.text) && 
chat.audios && !chat.isBanned) {
    			const word1 = wordd[Math.floor(Math.random() * (wordd.length))]
  this.sendMessage(m.chat, {text:`*${word1}*`}) }
return !0 }
export default handler
